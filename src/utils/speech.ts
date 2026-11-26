import { getLanguageMeta } from '../data/languages';

const speechCodeMap: Record<string, string> = {
  hi: 'hi-IN',
  gu: 'gu-IN',
  mr: 'mr-IN',
  bn: 'bn-IN',
  ta: 'ta-IN',
  te: 'te-IN',
  kn: 'kn-IN',
  ml: 'ml-IN',
  pa: 'pa-IN',
  or: 'or-IN',
  sa: 'hi-IN',
  ur: 'ur-IN',
};

// Devanagari languages that can share a Hindi voice if a dedicated voice is unavailable
const devanagariLangs = new Set(['hi', 'mr', 'sa']);

// Keep module-level reference to prevent Chrome GC bug from dropping onend/audio
let activeUtterance: SpeechSynthesisUtterance | null = null;
let activeTimer: ReturnType<typeof setTimeout> | null = null;

export interface SpeakResult {
  ok: boolean;
  mode: 'native' | 'phonetic' | 'unavailable';
  voiceName?: string;
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const getLoadedVoices = (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve([]);
      return;
    }

    const synth = window.speechSynthesis;
    const existing = synth.getVoices();
    if (existing.length > 0) {
      resolve(existing);
      return;
    }

    let settled = false;
    const onVoicesChanged = () => {
      if (settled) return;
      settled = true;
      synth.removeEventListener('voiceschanged', onVoicesChanged);
      resolve(synth.getVoices());
    };

    synth.addEventListener('voiceschanged', onVoicesChanged);

    // Fallback timeout if browser never fires voiceschanged
    setTimeout(() => {
      if (!settled) {
        settled = true;
        synth.removeEventListener('voiceschanged', onVoicesChanged);
        resolve(synth.getVoices());
      }
    }, 250);
  });
};

const wordPhoneticOverrides: Record<string, string> = {
  be: 'bay',
  do: 'doh',
  so: 'soh',
  sau: 'sow',
  nau: 'now',
  nav: 'nuv',
  das: 'dus',
  ter: 'tair',
  bees: 'beece',
  tees: 'teess',
  vees: 'veess',
  trees: 'treess',
  chha: 'chuh',
  chhah: 'chheh',
  sat: 'sut',
  saat: 'saat',
};

const preparePhoneticForEnglishTTS = (rawText: string): string => {
  const cleaned = rawText
    .replace(/ã/g, 'aan')
    .replace(/õ/g, 'on')
    .replace(/ā/g, 'aa')
    .replace(/ī/g, 'ee')
    .replace(/ū/g, 'oo')
    .replace(/-/g, ' ')
    .trim();

  const lower = cleaned.toLowerCase();
  if (wordPhoneticOverrides[lower]) {
    return wordPhoneticOverrides[lower];
  }
  return cleaned;
};

const findBestVoice = (
  voices: SpeechSynthesisVoice[],
  lang: string,
  targetCode: string
): { voice: SpeechSynthesisVoice | null; isNative: boolean } => {
  if (voices.length === 0) return { voice: null, isNative: false };

  const prefix = lang.slice(0, 2).toLowerCase();
  const targetLower = targetCode.toLowerCase();

  // 1. Exact BCP-47 match (e.g. gu-IN)
  const exact = voices.find((v) => v.lang.toLowerCase() === targetLower);
  if (exact) return { voice: exact, isNative: true };

  // 2. Language prefix match (e.g. gu, gu_IN)
  const byPrefix = voices.find((v) =>
    v.lang.toLowerCase().replace('_', '-').startsWith(`${prefix}-`) ||
    v.lang.toLowerCase() === prefix
  );
  if (byPrefix) return { voice: byPrefix, isNative: true };

  // 3. Devanagari fallback to Hindi voice for Marathi / Sanskrit
  if (devanagariLangs.has(prefix)) {
    const hiVoice = voices.find((v) =>
      v.lang.toLowerCase().replace('_', '-').startsWith('hi')
    );
    if (hiVoice) return { voice: hiVoice, isNative: true };
  }

  // 4. No native voice for this Indic language: pick Indian English or default English voice
  const enIn = voices.find((v) => v.lang.toLowerCase().replace('_', '-') === 'en-in');
  if (enIn) return { voice: enIn, isNative: false };

  const enAny = voices.find((v) => v.lang.toLowerCase().startsWith('en'));
  if (enAny) return { voice: enAny, isNative: false };

  return { voice: voices[0] || null, isNative: false };
};

const speakUtterance = (
  text: string,
  langCode: string,
  voice: SpeechSynthesisVoice | null,
  rate: number
): Promise<boolean> => {
  return new Promise((resolve) => {
    const synth = window.speechSynthesis;

    if (activeTimer) {
      clearTimeout(activeTimer);
      activeTimer = null;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    activeUtterance = utterance;

    utterance.lang = langCode;
    utterance.rate = rate;
    utterance.volume = 1;
    utterance.pitch = 1;
    if (voice) {
      utterance.voice = voice;
    }

    let settled = false;
    const finish = (ok: boolean) => {
      if (settled) return;
      settled = true;
      if (activeTimer) {
        clearTimeout(activeTimer);
        activeTimer = null;
      }
      if (activeUtterance === utterance) {
        activeUtterance = null;
      }
      resolve(ok);
    };

    utterance.onend = () => finish(true);
    utterance.onerror = () => finish(false);

    // Safety timeout so UI never stays stuck in "Playing..."
    activeTimer = setTimeout(() => finish(true), 4500);

    try {
      // Unstick paused speechSynthesis in Chromium
      if (synth.paused) {
        synth.resume();
      }
      synth.speak(utterance);
    } catch {
      finish(false);
    }
  });
};

export const getVoiceSupportInfo = async (lang: string): Promise<{ hasNativeVoice: boolean; voiceName?: string }> => {
  const voices = await getLoadedVoices();
  const targetCode = speechCodeMap[lang] || getLanguageMeta(lang).speechCode || 'hi-IN';
  const { voice, isNative } = findBestVoice(voices, lang, targetCode);
  return {
    hasNativeVoice: isNative,
    voiceName: voice?.name,
  };
};

export const speakText = async (
  text: string,
  lang: string = 'gu',
  rate: number = 0.9,
  fallbackText?: string
): Promise<SpeakResult> => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return { ok: false, mode: 'unavailable' };
  }

  try {
    const synth = window.speechSynthesis;

    // Chrome/Edge bug workaround: wait briefly after cancel() so new speak() isn't dropped
    if (synth.speaking || synth.pending) {
      synth.cancel();
      await delay(60);
    }

    const voices = await getLoadedVoices();
    const targetCode = speechCodeMap[lang] || getLanguageMeta(lang).speechCode || 'hi-IN';
    const { voice, isNative } = findBestVoice(voices, lang, targetCode);

    // If a native Indic voice is available, speak the native script text
    if (isNative && voice) {
      const ok = await speakUtterance(text, voice.lang || targetCode, voice, rate);
      if (ok) {
        return { ok: true, mode: 'native', voiceName: voice.name };
      }
      // If native utterance errored (e.g. offline network voice), fall through to phonetic
    }

    // No native voice installed (or native voice failed):
    // Speak phonetic transliteration with English/en-IN voice so it is always hearable!
    const textToSpeak = fallbackText ? preparePhoneticForEnglishTTS(fallbackText) : text;
    const fallbackVoice =
      voices.find((v) => v.lang.toLowerCase().replace('_', '-') === 'en-in') ||
      voices.find((v) => v.lang.toLowerCase().startsWith('en')) ||
      voice;
    const fallbackLang = fallbackVoice?.lang || 'en-IN';

    const ok = await speakUtterance(textToSpeak, fallbackLang, fallbackVoice, rate);
    return {
      ok,
      mode: 'phonetic',
      voiceName: fallbackVoice?.name,
    };
  } catch {
    return { ok: false, mode: 'unavailable' };
  }
};
