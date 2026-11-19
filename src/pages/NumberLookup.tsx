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
  Circle
} from 'lucide-react';
import { numbersData } from '../data/numbers';
import { useStore } from '../store/useStore';
import { speakText } from '../utils/speech';
import { playSound } from '../utils/sound';

const NumberLookup = () => {
  const { progress, toggleNumberLearned, audioSpeed } = useStore();
  const [targetNum, setTargetNum] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSpeechLang, setActiveSpeechLang] = useState<'gu' | 'hi' | null>(null);

  const numData = numbersData.find((n) => n.english === targetNum) || numbersData[0];
  const isLearned = progress.numbersLearned.includes(numData.english);

  const handleSpeak = async (lang: 'gu' | 'hi') => {
    playSound('click');
    setActiveSpeechLang(lang);
    const text = lang === 'gu' ? numData.gujaratiName : numData.hindiName;
    await speakText(text, lang, audioSpeed);
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

    // Match by word
    const match = numbersData.find(
      (n) =>
        n.gujarati === q ||
        n.hindi === q ||
        n.gujaratiName.toLowerCase() === q ||
        n.hindiName.toLowerCase() === q ||
        n.gujaratiTranslit.toLowerCase() === q ||
        n.hindiTranslit.toLowerCase() === q ||
        n.phonetics.gu.includes(q) ||
        n.phonetics.hi.includes(q)
    );

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
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
          Number Finder & Explorer
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Inspect, hear, and compare any number from 1 to 100 side-by-side in Gujarati and Hindi.
        </p>
      </div>

      {/* Search & Direct Jumper */}
      <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm space-y-3">
        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type number (1-100) or word (e.g. 25, pachees, પચીસ, पच्चीस)..."
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

        {/* Number Slider */}
        <div className="pt-2">
          <div className="flex justify-between text-xs font-bold text-slate-400 mb-1">
            <span>1</span>
            <span className="text-indigo-600">Selected: #{targetNum}</span>
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

      {/* Interactive Main Inspector Card */}
      <motion.div
        key={numData.english}
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

        {/* Huge Western Numeral */}
        <div className="text-center">
          <h2 className="text-7xl sm:text-8xl font-black text-slate-900 tracking-tight">
            {numData.english}
          </h2>
        </div>

        {/* Comparison Grid: Gujarati vs Hindi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Gujarati Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-blue-50/80 border border-indigo-100 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-md">
                ગુજરાતી (Gujarati)
              </span>
              <div className="text-5xl font-black text-indigo-900 my-2">{numData.gujarati}</div>
              <div className="text-2xl font-bold text-slate-800">{numData.gujaratiName}</div>
              <div className="text-sm font-bold text-indigo-600 font-mono mt-0.5">
                "{numData.gujaratiTranslit}"
              </div>
            </div>

            <button
              onClick={() => handleSpeak('gu')}
              className={`mt-4 w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition ${
                activeSpeechLang === 'gu'
                  ? 'bg-indigo-600 text-white animate-pulse'
                  : 'bg-white hover:bg-indigo-600 hover:text-white text-indigo-700 shadow-sm border border-indigo-200'
              }`}
            >
              <Volume2 size={16} />
              <span>{activeSpeechLang === 'gu' ? 'Speaking...' : 'Listen in Gujarati'}</span>
            </button>
          </div>

          {/* Hindi Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50/80 to-pink-50/80 border border-purple-100 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md">
                हिन्दी (Hindi)
              </span>
              <div className="text-5xl font-black text-purple-900 my-2">{numData.hindi}</div>
              <div className="text-2xl font-bold text-slate-800">{numData.hindiName}</div>
              <div className="text-sm font-bold text-purple-600 font-mono mt-0.5">
                "{numData.hindiTranslit}"
              </div>
            </div>

            <button
              onClick={() => handleSpeak('hi')}
              className={`mt-4 w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition ${
                activeSpeechLang === 'hi'
                  ? 'bg-purple-600 text-white animate-pulse'
                  : 'bg-white hover:bg-purple-600 hover:text-white text-purple-700 shadow-sm border border-purple-200'
              }`}
            >
              <Volume2 size={16} />
              <span>{activeSpeechLang === 'hi' ? 'Speaking...' : 'Listen in Hindi'}</span>
            </button>
          </div>
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
                className="w-3.5 h-3.5 rounded-full bg-indigo-500/80 hover:bg-indigo-600 transition"
                title={`Item ${i + 1}`}
              />
            ))}
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
