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

export const speakText = (
  text: string,
  lang: string = 'gu',
  rate: number = 0.9
): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve();
      return;
    }

    try {
      window.speechSynthesis.cancel(); // Stop any pending speech

      const utterance = new SpeechSynthesisUtterance(text);
      const targetCode = speechCodeMap[lang] || getLanguageMeta(lang).speechCode || 'hi-IN';
      utterance.lang = targetCode;
      utterance.rate = rate;

      // Find matching system voice if available
      const voices = window.speechSynthesis.getVoices();
      const prefix = lang.slice(0, 2).toLowerCase();
      const matchedVoice = voices.find(
        (v) =>
          v.lang.toLowerCase() === targetCode.toLowerCase() ||
          v.lang.toLowerCase().startsWith(prefix)
      );

      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      window.speechSynthesis.speak(utterance);
    } catch {
      resolve();
    }
  });
};
