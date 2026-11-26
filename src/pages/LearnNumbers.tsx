import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Volume2,
  CheckCircle2,
  Circle,
  Search,
  Filter,
  CheckCheck,
  RotateCcw,
  Layers,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { numbersData, getNumberForLang, type NumberItem } from '../data/numbers';
import { useStore } from '../store/useStore';
import { speakText } from '../utils/speech';
import { playSound } from '../utils/sound';
import { LanguageSelector } from '../components/LanguageSelector';
import { VoiceStatusNote } from '../components/VoiceStatusNote';
import { getLanguageMeta, type LanguageCode } from '../data/languages';

const LearnNumbers = () => {
  const { toggleNumberLearned, progress, audioSpeed, selectedLanguage, setSelectedLanguage } = useStore();
  const [search, setSearch] = useState('');
  const [rangeFilter, setRangeFilter] = useState<'all' | '1-20' | '21-40' | '41-60' | '61-80' | '81-100'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'learned' | 'unlearned'>('all');
  const [activeSpeakingNum, setActiveSpeakingNum] = useState<number | null>(null);

  const langMeta = getLanguageMeta(selectedLanguage);

  // Filter numbers
  const filteredNumbers = numbersData.filter((num) => {
    // Range filter
    if (rangeFilter === '1-20' && (num.english < 1 || num.english > 20)) return false;
    if (rangeFilter === '21-40' && (num.english < 21 || num.english > 40)) return false;
    if (rangeFilter === '41-60' && (num.english < 41 || num.english > 60)) return false;
    if (rangeFilter === '61-80' && (num.english < 61 || num.english > 80)) return false;
    if (rangeFilter === '81-100' && (num.english < 81 || num.english > 100)) return false;

    // Status filter
    const isLearned = progress.numbersLearned.includes(num.english);
    if (statusFilter === 'learned' && !isLearned) return false;
    if (statusFilter === 'unlearned' && isLearned) return false;

    // Search query
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      const currentDetail = getNumberForLang(num, selectedLanguage);
      const matchesEng = num.english.toString().includes(q);
      const matchesCurr =
        currentDetail.digit.includes(q) ||
        currentDetail.name.toLowerCase().includes(q) ||
        currentDetail.translit.toLowerCase().includes(q);

      return matchesEng || matchesCurr;
    }

    return true;
  });

  const learnedCount = progress.numbersLearned.length;
  const progressPercent = Math.round((learnedCount / 100) * 100);

  const handleSpeak = async (num: NumberItem, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveSpeakingNum(num.english);
    const detail = getNumberForLang(num, selectedLanguage);
    await speakText(detail.name, selectedLanguage, audioSpeed, detail.translit);
    setActiveSpeakingNum(null);
  };

  const handleToggleLearned = (num: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    playSound('click');
    toggleNumberLearned(num);
  };

  const markAllVisible = () => {
    playSound('click');
    filteredNumbers.forEach((n) => {
      if (!progress.numbersLearned.includes(n.english)) {
        toggleNumberLearned(n.english);
      }
    });
  };

  const unmarkAllVisible = () => {
    playSound('click');
    filteredNumbers.forEach((n) => {
      if (progress.numbersLearned.includes(n.english)) {
        toggleNumberLearned(n.english);
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              Learn Numbers 1 - 100
            </h1>
            <span className="text-xs bg-indigo-100 text-indigo-700 font-bold px-2.5 py-1 rounded-full">
              {numbersData.length} Total
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Explore 1-100 in <strong>{langMeta.name} ({langMeta.nativeName})</strong> with native numerals, words, and speech.
          </p>
        </div>

        {/* Language Selector & Flashcard Shortcut */}
        <div className="flex items-center gap-3">
          <Link
            to="/flashcards"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 shadow-sm transition"
          >
            <Layers size={15} />
            <span>Flashcards</span>
          </Link>

          <LanguageSelector
            currentLang={selectedLanguage}
            onSelect={(code: LanguageCode) => setSelectedLanguage(code)}
          />
        </div>
      </div>

      {/* Language Quick Pills Bar */}
      <LanguageSelector
        currentLang={selectedLanguage}
        onSelect={(code: LanguageCode) => setSelectedLanguage(code)}
        variant="pills"
        className="pt-1"
      />

      {/* Voice Support / Phonetic Fallback Notice */}
      <VoiceStatusNote
        lang={selectedLanguage}
        sampleText={getNumberForLang(numbersData[0], selectedLanguage).name}
        sampleTranslit={getNumberForLang(numbersData[0], selectedLanguage).translit}
      />

      {/* Progress Bar Header */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-auto flex-1">
          <div className="flex justify-between items-center mb-1.5 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-500" />
              <span>Overall Memorization Progress</span>
            </span>
            <span className="font-bold text-indigo-600">
              {learnedCount} / 100 ({progressPercent}%)
            </span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Quick Batch Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={markAllVisible}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition"
            title="Mark visible numbers as learned"
          >
            <CheckCheck size={14} /> Mark Visible
          </button>
          <button
            onClick={unmarkAllVisible}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 bg-slate-50 text-slate-600 hover:bg-slate-100 rounded-lg border border-slate-200 transition"
            title="Unmark visible numbers"
          >
            <RotateCcw size={14} /> Clear Visible
          </button>
        </div>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search by 1..100, script (${getNumberForLang(numbersData[0], selectedLanguage).name}), or phonetic...`}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition ${
                statusFilter === 'all' ? 'bg-white shadow text-indigo-700 font-bold' : 'text-slate-600'
              }`}
            >
              All ({numbersData.length})
            </button>
            <button
              onClick={() => setStatusFilter('learned')}
              className={`px-3 py-1.5 rounded-lg transition ${
                statusFilter === 'learned' ? 'bg-white shadow text-emerald-700 font-bold' : 'text-slate-600'
              }`}
            >
              Learned ({learnedCount})
            </button>
            <button
              onClick={() => setStatusFilter('unlearned')}
              className={`px-3 py-1.5 rounded-lg transition ${
                statusFilter === 'unlearned' ? 'bg-white shadow text-amber-700 font-bold' : 'text-slate-600'
              }`}
            >
              To Learn ({100 - learnedCount})
            </button>
          </div>
        </div>

        {/* Range Segmented Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-medium flex items-center gap-1 mr-1">
            <Filter size={13} /> Range:
          </span>
          {(['all', '1-20', '21-40', '41-60', '61-80', '81-100'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRangeFilter(r)}
              className={`px-3 py-1 rounded-lg font-semibold whitespace-nowrap transition ${
                rangeFilter === r
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {r === 'all' ? '1 - 100' : r}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Number Cards */}
      {filteredNumbers.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
          <p className="text-base font-semibold text-slate-700">No numbers match your filters</p>
          <p className="text-xs text-slate-400 mt-1">Try resetting the search bar or filter buttons.</p>
          <button
            onClick={() => {
              setSearch('');
              setRangeFilter('all');
              setStatusFilter('all');
            }}
            className="mt-4 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-100 transition"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          <AnimatePresence>
            {filteredNumbers.map((num) => {
              const isLearned = progress.numbersLearned.includes(num.english);
              const isSpeaking = activeSpeakingNum === num.english;
              const detail = getNumberForLang(num, selectedLanguage);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={num.english}
                  whileHover={{ y: -3, scale: 1.02 }}
                  onClick={() => handleToggleLearned(num.english)}
                  className={`relative bg-white rounded-2xl p-4 border transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between ${
                    isLearned
                      ? 'border-emerald-300 ring-2 ring-emerald-500/20 bg-emerald-50/20'
                      : 'border-slate-200/90 hover:border-indigo-300'
                  }`}
                >
                  {/* Top Bar: English digit and learned checkmark button */}
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-xs font-black font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      #{num.english}
                    </span>
                    <button
                      onClick={(e) => handleToggleLearned(num.english, e)}
                      className={`p-1 rounded-full transition ${
                        isLearned
                          ? 'text-emerald-600 hover:text-emerald-700'
                          : 'text-slate-300 hover:text-slate-500'
                      }`}
                      title={isLearned ? 'Marked as learned! Click to unmark' : 'Click to mark as learned'}
                    >
                      {isLearned ? <CheckCircle2 size={18} className="fill-emerald-100" /> : <Circle size={18} />}
                    </button>
                  </div>

                  {/* Center: Native Digit and Word */}
                  <div className="text-center my-2">
                    <div className="text-4xl font-black text-indigo-700 tracking-wide font-sans mb-1">
                      {detail.digit}
                    </div>
                    <div className="text-base font-bold text-slate-800 tracking-tight leading-snug">
                      {detail.name}
                    </div>
                    <div className="text-xs font-semibold text-slate-400 font-mono mt-0.5">
                      {detail.translit}
                    </div>
                  </div>

                  {/* Audio Listen Button */}
                  <button
                    onClick={(e) => handleSpeak(num, e)}
                    className={`mt-2 w-full py-1.5 px-2 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold transition ${
                      isSpeaking
                        ? 'bg-indigo-600 text-white animate-pulse'
                        : 'bg-slate-50 hover:bg-indigo-50 text-indigo-600 border border-slate-200/80 hover:border-indigo-200'
                    }`}
                  >
                    <Volume2 size={14} className={isSpeaking ? 'animate-bounce' : ''} />
                    <span>{isSpeaking ? 'Playing...' : 'Pronounce'}</span>
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default LearnNumbers;
