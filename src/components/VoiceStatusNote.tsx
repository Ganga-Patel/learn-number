import { useEffect, useState } from 'react';
import { Volume2, Info } from 'lucide-react';
import { getVoiceSupportInfo, speakText } from '../utils/speech';
import { getLanguageMeta } from '../data/languages';
import { useStore } from '../store/useStore';

interface VoiceStatusNoteProps {
  lang: string;
  sampleText: string;
  sampleTranslit: string;
}

export const VoiceStatusNote = ({ lang, sampleText, sampleTranslit }: VoiceStatusNoteProps) => {
  const { audioSpeed } = useStore();
  const [voiceInfo, setVoiceInfo] = useState<{ hasNativeVoice: boolean; voiceName?: string } | null>(null);
  const [testing, setTesting] = useState(false);

  const langMeta = getLanguageMeta(lang);

  useEffect(() => {
    let active = true;
    getVoiceSupportInfo(lang).then((info) => {
      if (active) setVoiceInfo(info);
    });
    return () => {
      active = false;
    };
  }, [lang]);

  if (!voiceInfo || voiceInfo.hasNativeVoice) {
    return null;
  }

  const handleTest = async () => {
    setTesting(true);
    await speakText(sampleText, lang, audioSpeed, sampleTranslit);
    setTesting(false);
  };

  return (
    <div className="bg-amber-50 border border-amber-200/80 rounded-2xl px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-amber-900">
      <div className="flex items-start sm:items-center gap-2">
        <Info size={16} className="text-amber-600 flex-shrink-0 mt-0.5 sm:mt-0" />
        <span>
          Your browser doesn&apos;t have a native <strong>{langMeta.name}</strong> voice installed — using{' '}
          <strong>phonetic pronunciation</strong> ({voiceInfo.voiceName || 'system voice'}) so audio remains audible.
          For native {langMeta.name} voices on Windows, try Microsoft Edge or install the Windows {langMeta.name} speech pack.
        </span>
      </div>
      <button
        type="button"
        onClick={handleTest}
        className="self-start sm:self-auto flex items-center gap-1.5 bg-amber-200/70 hover:bg-amber-300 text-amber-950 font-bold px-3 py-1.5 rounded-xl whitespace-nowrap transition"
      >
        <Volume2 size={14} className={testing ? 'animate-bounce' : ''} />
        <span>{testing ? 'Speaking...' : 'Test Audio'}</span>
      </button>
    </div>
  );
};
