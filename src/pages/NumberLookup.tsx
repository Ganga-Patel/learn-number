import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Volume2,
  Search,
  ArrowLeft,
  ArrowRight,
  Hash,
  Sparkles,
  CheckCircle2,
  Circle,
  Globe
} from 'lucide-react';
import { numbersData, getNumberForLang } from '../data/numbers';
import { supportedLanguages, getLanguageMeta } from '../data/languages';
import { useStore } from '../store/useStore';
import { speakText } from '../utils/speech';
import { playSound } from '../utils/sound';
import { LanguageSelector } from '../components/LanguageSelector';

const NumberLookup = () => {
  const { progress, toggleNumberLearned, audioSpeed, selectedLanguage, setSelectedLanguage } = useStore();
  const [targetNum, setTargetNum] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSpeechLang, setActiveSpeechLang] = useState<string | null>(null);

  const numData = numbersData.find((n) => n.english === targetNum) || numbersData[0];
  const isLearned = progress.numbersLearned.includes(numData.english);
  const primaryDetail = getNumberForLang(numData, selectedLanguage);
  const primaryMeta = getLanguageMeta(selectedLanguage);

  const handleSpeak = async (lang: string) => {
    setActiveSpeechLang(lang);
    const detail = getNumberForLang(numData, lang);
    await speakText(detail.name, lang, audioSpeed, detail.translit);
    setActiveSpeechLang(null);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;

    // Check if integer
    const parsed = parseInt(q, 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed <= 100) {
      setTargetNum(parsed);
      setSearchQuery('');
      playSound('click');
      return;
    }

    // Match across all 12 languages
    const match = numbersData.find((n) => {
      if (n.english.toString() === q) return true;
      for (const lang of supportedLanguages) {
        const d = getNumberForLang(n, lang.code);
        if (
          d.digit === q ||
          d.name.toLowerCase() === q ||
          d.translit.toLowerCase() === q ||
          d.phonetics.includes(q)
        ) {
          return true;
        }
      }
      return false;
    });

    if (match) {
      setTargetNum(match.english);
      setSearchQuery('');
      playSound('click');
    }
  };

  const handlePrev = () => {
    playSound('click');
    setTargetNum((p) => (p > 1 ? p - 1 : 100));
  };

  const handleNext = () => {
    playSound('click');
    setTargetNum((p) => (p < 100 ? p + 1 : 1));
  };

  const tens = Math.floor(numData.english / 10);
  const ones = numData.english % 10;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
          Pan-Indian Number Explorer
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Compare numbers (1 to 100) across 12 classical and modern Indian languages.
        </p>
      </div>

      {/* Search & Direct Jumper */}
      <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <form onSubmit={handleSearchSubmit} className="flex-1 flex gap-2">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type number (1-100) or word in any language (e.g. 25, pachees, ਪੱਚੀ, இருபத்தைந்து)..."
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
            >
              Find
            </button>
          </form>

          <LanguageSelector
            currentLang={selectedLanguage}
            onSelect={(code) => setSelectedLanguage(code)}
          />
        </div>

        {/* Number Slider */}
        <div className="pt-2">
          <div className="flex justify-between text-xs font-bold text-slate-400 mb-1">
            <span>1</span>
            <span className="text-indigo-600 font-extrabold text-sm">Selected Number: #{targetNum}</span>
            <span>100</span>
          </div>
          <input
            type="range"
            min={1}
            max={100}
            value={targetNum}
            onChange={(e) => setTargetNum(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
        </div>
      </div>

      {/* Main Focus Card for Selected Language */}
      <motion.div
        key={numData.english + selectedLanguage}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-50 text-indigo-700 font-bold font-mono text-sm flex items-center gap-1">
              <Hash size={16} /> {numData.english}
            </span>
            <span className="text-xs font-bold text-slate-400">English Numeral</span>
          </div>

          <button
            onClick={() => {
              playSound('click');
              toggleNumberLearned(numData.english);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              isLearned
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {isLearned ? (
              <>
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Learned</span>
              </>
            ) : (
              <>
                <Circle size={16} />
                <span>Mark Learned</span>
              </>
            )}
          </button>
        </div>

        {/* Large Primary Display */}
        <div className="text-center py-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            {primaryMeta.icon} {primaryMeta.name} ({primaryMeta.nativeName})
          </span>
          <div className="text-6xl sm:text-7xl font-black text-indigo-700 my-2">
            {primaryDetail.digit}
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            {primaryDetail.name}
          </div>
          <div className="text-base font-semibold text-slate-400 font-mono mt-1">
            "{primaryDetail.translit}"
          </div>

          <button
            onClick={() => handleSpeak(selectedLanguage)}
            className={`mt-4 px-6 py-2.5 rounded-2xl text-xs font-bold inline-flex items-center gap-2 transition shadow-sm ${
              activeSpeechLang === selectedLanguage
                ? 'bg-indigo-600 text-white animate-pulse'
                : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200'
            }`}
          >
            <Volume2 size={16} />
            <span>{activeSpeechLang === selectedLanguage ? 'Speaking...' : `Listen in ${primaryMeta.name}`}</span>
          </button>
        </div>

        {/* Visual Counting Beads */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <p className="text-xs font-bold text-slate-500 mb-2 flex items-center gap-1">
            <Sparkles size={13} className="text-amber-500" />
            <span>Base-10 Structure: {tens > 0 ? `${tens} Tens` : ''}{tens > 0 && ones > 0 ? ' + ' : ''}{ones > 0 ? `${ones} Ones` : (tens === 0 ? '0' : '')}</span>
          </p>
          <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
            {Array.from({ length: numData.english }).map((_, i) => (
              <span
                key={i}
                className="w-3 h-3 rounded-full bg-indigo-500/80 hover:bg-indigo-600 transition"
                title={`Item ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 12 Indian Languages Comparison Matrix */}
        <div>
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-3 border-b border-slate-100 pb-2">
            <Globe size={16} className="text-indigo-600" />
            <span>All 12 Indian Languages for Number #{numData.english}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {supportedLanguages.map((lang) => {
              const d = getNumberForLang(numData, lang.code);
              const isSpeakingThis = activeSpeechLang === lang.code;
              return (
                <div
                  key={lang.code}
                  className={`p-3 rounded-xl border flex flex-col justify-between transition ${
                    lang.code === selectedLanguage
                      ? 'bg-indigo-50/70 border-indigo-300 ring-2 ring-indigo-200'
                      : 'bg-white border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-1">
                      <span>{lang.icon} {lang.name}</span>
                      <span className="font-mono text-indigo-600 font-extrabold text-sm">{d.digit}</span>
                    </div>
                    <p className="font-black text-slate-800 text-sm">{d.name}</p>
                    <p className="text-[11px] text-slate-500 font-mono">{d.translit}</p>
                  </div>

                  <button
                    onClick={() => handleSpeak(lang.code)}
                    className={`mt-2 py-1 px-2 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 transition ${
                      isSpeakingThis
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700'
                    }`}
                  >
                    <Volume2 size={12} />
                    <span>{isSpeakingThis ? '...' : 'Listen'}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Stepper Navigation */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          className="flex-1 py-3 px-4 bg-white border border-slate-200 hover:bg-slate-50 rounded-2xl font-bold text-slate-700 text-sm shadow-sm transition flex items-center justify-center gap-2"
        >
          <ArrowLeft size={16} /> Previous (#{targetNum > 1 ? targetNum - 1 : 100})
        </button>
        <button
          onClick={handleNext}
          className="flex-1 py-3 px-4 bg-white border border-slate-200 hover:bg-slate-50 rounded-2xl font-bold text-slate-700 text-sm shadow-sm transition flex items-center justify-center gap-2"
        >
          Next (#{targetNum < 100 ? targetNum + 1 : 1}) <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default NumberLookup;
