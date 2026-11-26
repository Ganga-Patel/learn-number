import { useState, useMemo, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Volume2,
  RotateCw,
  ArrowLeft,
  ArrowRight,
  Shuffle,
  CheckCircle2,
  BookOpen,
  Calendar,
  Sparkles
} from 'lucide-react';
import { numbersData, getNumberForLang } from '../data/numbers';
import { getMonthsForLanguage } from '../data/months';
import { useStore } from '../store/useStore';
import { speakText } from '../utils/speech';
import { playSound } from '../utils/sound';
import { LanguageSelector } from '../components/LanguageSelector';
import { getLanguageMeta, type LanguageCode } from '../data/languages';

interface CardItem {
  id: string | number;
  front: string;
  frontSub: string;
  backTitle: string;
  backNative: string;
  backTranslit: string;
  backSub: string;
  audioText: string;
  audioLang: string;
  isLearned: boolean;
  onToggleLearned: () => void;
}

const Flashcards = () => {
  const { progress, toggleNumberLearned, toggleMonthLearned, audioSpeed, selectedLanguage, setSelectedLanguage } = useStore();
  const [category, setCategory] = useState<'numbers' | 'months'>('numbers');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledIndices, setShuffledIndices] = useState<number[] | null>(null);

  const langMeta = getLanguageMeta(selectedLanguage);

  // Derive card deck using useMemo
  const rawDeck = useMemo<CardItem[]>(() => {
    if (category === 'numbers') {
      return numbersData.map((num) => {
        const detail = getNumberForLang(num, selectedLanguage);
        return {
          id: num.english,
          front: num.english.toString(),
          frontSub: `Number #${num.english}`,
          backTitle: detail.digit,
          backNative: detail.name,
          backTranslit: detail.translit,
          backSub: `${langMeta.name} (${langMeta.nativeName}) translation`,
          audioText: detail.name,
          audioLang: selectedLanguage,
          isLearned: progress.numbersLearned.includes(num.english),
          onToggleLearned: () => toggleNumberLearned(num.english),
        };
      });
    } else {
      const monthPool = getMonthsForLanguage(selectedLanguage);
      return monthPool.map((month) => ({
        id: month.id,
        front: month.english,
        frontSub: `Traditional Month #${month.order} (${month.gregorian})`,
        backTitle: month.native,
        backNative: month.native,
        backTranslit: month.transliteration,
        backSub: `Season: ${month.season} • Festivals: ${month.festival}`,
        audioText: month.native,
        audioLang: selectedLanguage,
        isLearned: progress.monthsLearned.includes(month.id),
        onToggleLearned: () => toggleMonthLearned(month.id),
      }));
    }
  }, [category, selectedLanguage, langMeta, progress.numbersLearned, progress.monthsLearned, toggleNumberLearned, toggleMonthLearned]);

  const cardDeck = useMemo(() => {
    if (!shuffledIndices || shuffledIndices.length !== rawDeck.length) {
      return rawDeck;
    }
    return shuffledIndices.map((idx) => rawDeck[idx]);
  }, [rawDeck, shuffledIndices]);

  // Reset card position when category or lang changes
  const handleCategoryChange = (newCat: 'numbers' | 'months') => {
    playSound('click');
    setCategory(newCat);
    setCurrentIndex(0);
    setIsFlipped(false);
    setShuffledIndices(null);
  };

  const handleLangChange = (newLang: LanguageCode) => {
    playSound('click');
    setSelectedLanguage(newLang);
    setIsFlipped(false);
  };

  const currentCard = cardDeck[currentIndex] || cardDeck[0];

  const handleNext = useCallback(() => {
    playSound('click');
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev < cardDeck.length - 1 ? prev + 1 : 0));
  }, [cardDeck.length]);

  const handlePrev = useCallback(() => {
    playSound('click');
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : cardDeck.length - 1));
  }, [cardDeck.length]);

  const handleFlip = useCallback(() => {
    playSound('click');
    setIsFlipped((prev) => !prev);
  }, []);

  const handleShuffle = () => {
    playSound('click');
    setIsFlipped(false);
    const indices = Array.from({ length: rawDeck.length }, (_, i) => i);
    indices.sort(() => Math.random() - 0.5);
    setShuffledIndices(indices);
    setCurrentIndex(0);
  };

  const handleSpeak = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!currentCard) return;
    speakText(currentCard.audioText, currentCard.audioLang, audioSpeed, currentCard.backTranslit);
  }, [currentCard, audioSpeed]);

  const handleMarkLearned = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!currentCard) return;
    playSound('correct');
    currentCard.onToggleLearned();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowUp' || e.key === 'v') {
        handleSpeak();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleNext, handlePrev, handleSpeak]);

  if (!currentCard) return null;

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Title */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
          Interactive Flashcards
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Flip cards to test recall in <strong>{langMeta.name} ({langMeta.nativeName})</strong>. Press Space to flip.
        </p>
      </div>

      {/* Selectors */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* Category */}
        <div className="flex bg-slate-200/80 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => handleCategoryChange('numbers')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
              category === 'numbers' ? 'bg-white shadow text-indigo-700' : 'text-slate-600'
            }`}
          >
            <BookOpen size={14} /> Numbers
          </button>
          <button
            onClick={() => handleCategoryChange('months')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
              category === 'months' ? 'bg-white shadow text-indigo-700' : 'text-slate-600'
            }`}
          >
            <Calendar size={14} /> Months
          </button>
        </div>

        {/* Language Selector Dropdown */}
        <LanguageSelector
          currentLang={selectedLanguage}
          onSelect={handleLangChange}
        />

        <button
          onClick={handleShuffle}
          className="flex items-center gap-1 bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition shadow-sm"
          title="Shuffle deck"
        >
          <Shuffle size={14} /> Shuffle
        </button>
      </div>

      {/* Language Quick Pills Bar */}
      <LanguageSelector
        currentLang={selectedLanguage}
        onSelect={handleLangChange}
        variant="pills"
      />

      {/* Card Counter & Progress */}
      <div className="flex justify-between items-center text-xs font-bold text-slate-500 px-2">
        <span>
          Card {currentIndex + 1} of {cardDeck.length}
        </span>
        <span className="flex items-center gap-1 text-emerald-600">
          <Sparkles size={14} />
          {cardDeck.filter((c) => c.isLearned).length} Mastered
        </span>
      </div>

      {/* 3D Flashcard */}
      <div
        onClick={handleFlip}
        className="w-full h-80 sm:h-96 cursor-pointer select-none perspective-1000 relative"
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="w-full h-full relative rounded-3xl shadow-lg border border-slate-200/80 bg-white"
        >
          {/* FRONT */}
          <div
            style={{ backfaceVisibility: 'hidden' }}
            className={`absolute inset-0 p-8 rounded-3xl flex flex-col justify-between items-center text-center ${
              isFlipped ? 'pointer-events-none' : ''
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                Front • Question
              </span>
              <button
                onClick={handleMarkLearned}
                className={`p-1.5 rounded-full transition ${
                  currentCard.isLearned ? 'text-emerald-600 bg-emerald-50' : 'text-slate-300 hover:text-slate-500'
                }`}
                title="Mark as Mastered"
              >
                <CheckCircle2 size={22} className={currentCard.isLearned ? 'fill-emerald-100' : ''} />
              </button>
            </div>

            <div>
              <h2 className="text-6xl sm:text-7xl font-black text-indigo-600 tracking-tight mb-2">
                {currentCard.front}
              </h2>
              <p className="text-sm font-semibold text-slate-500">{currentCard.frontSub}</p>
            </div>

            <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
              <RotateCw size={13} /> Tap anywhere to reveal {langMeta.name} ({langMeta.nativeName}) translation
            </div>
          </div>

          {/* BACK */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
            className={`absolute inset-0 p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col justify-between items-center text-center ${
              !isFlipped ? 'pointer-events-none' : ''
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-xs font-black uppercase tracking-wider text-indigo-600">
                Back • {langMeta.name} Answer
              </span>
              <button
                onClick={handleMarkLearned}
                className={`p-1.5 rounded-full transition ${
                  currentCard.isLearned ? 'text-emerald-600 bg-emerald-100' : 'text-slate-400 hover:text-slate-600'
                }`}
                title="Mark as Mastered"
              >
                <CheckCircle2 size={22} className={currentCard.isLearned ? 'fill-emerald-200' : ''} />
              </button>
            </div>

            <div className="space-y-2">
              <div className="text-5xl sm:text-6xl font-black text-indigo-800 tracking-tight">
                {currentCard.backTitle}
              </div>
              <div className="text-xl sm:text-2xl font-bold text-slate-800">
                {currentCard.backNative}
              </div>
              <div className="text-sm font-bold text-indigo-600 font-mono">
                {currentCard.backTranslit}
              </div>
              <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                {currentCard.backSub}
              </p>
            </div>

            <button
              onClick={handleSpeak}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md transition"
            >
              <Volume2 size={16} /> Listen Pronunciation
            </button>
          </div>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          className="flex-1 py-3 px-4 bg-white border border-slate-200 hover:bg-slate-50 rounded-2xl font-bold text-slate-700 text-sm shadow-sm transition flex items-center justify-center gap-2"
        >
          <ArrowLeft size={16} /> Previous
        </button>
        <button
          onClick={handleFlip}
          className="py-3 px-6 bg-slate-900 hover:bg-indigo-600 text-white rounded-2xl font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
        >
          <RotateCw size={16} /> Flip Card
        </button>
        <button
          onClick={handleNext}
          className="flex-1 py-3 px-4 bg-white border border-slate-200 hover:bg-slate-50 rounded-2xl font-bold text-slate-700 text-sm shadow-sm transition flex items-center justify-center gap-2"
        >
          Next <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Flashcards;
