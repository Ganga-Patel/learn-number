import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Keyboard,
  Mic,
  Headphones,
  Calendar,
  BookOpen,
  ArrowRight,
  Flame,
  Trophy
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { playSound } from '../utils/sound';
import { LanguageSelector } from '../components/LanguageSelector';
import { getLanguageMeta, type LanguageCode } from '../data/languages';

const PracticeMenu = () => {
  const { progress, selectedLanguage, setSelectedLanguage } = useStore();
  const [category, setCategory] = useState<'numbers' | 'months'>('numbers');

  const langMeta = getLanguageMeta(selectedLanguage);

  const modes = [
    {
      level: 'easy',
      name: 'Easy: Multiple Choice',
      desc: '4 options to choose from. Best for rapid recognition and visual association.',
      icon: CheckCircle2,
      color: 'emerald',
      badge: '+10 pts',
      bgGrad: 'from-emerald-500 to-teal-600',
    },
    {
      level: 'medium',
      name: 'Intermediate: Typing Test',
      desc: `Type the name in English transliteration or ${langMeta.name} (${langMeta.nativeName}) script.`,
      icon: Keyboard,
      color: 'blue',
      badge: '+20 pts',
      bgGrad: 'from-blue-500 to-indigo-600',
    },
    {
      level: 'hard',
      name: 'Hard: Voice Speaking',
      desc: `Speak the number or month aloud in ${langMeta.name} using your microphone for pronunciation evaluation.`,
      icon: Mic,
      color: 'purple',
      badge: '+30 pts',
      bgGrad: 'from-purple-500 to-violet-600',
    },
    {
      level: 'listening',
      name: 'Listening Challenge',
      desc: `Hear the native ${langMeta.name} speech audio and pick the corresponding answer.`,
      icon: Headphones,
      color: 'amber',
      badge: '+15 pts',
      bgGrad: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
          Interactive Practice Arena
        </h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
          Test your recognition, spelling, and pronunciation across India's classical and regional languages.
        </p>

        {/* User live stat pills */}
        <div className="inline-flex items-center gap-4 bg-white border border-slate-200 px-4 py-2 rounded-2xl shadow-sm text-xs font-bold mt-2">
          <span className="flex items-center gap-1.5 text-amber-600">
            <Trophy size={15} /> Total Score: {progress.scores.easy + progress.scores.medium + progress.scores.hard}
          </span>
          <span className="text-slate-300">|</span>
          <span className="flex items-center gap-1.5 text-orange-600">
            <Flame size={15} className="fill-orange-500" /> Current Streak: {progress.streak}
          </span>
        </div>
      </div>

      {/* Selectors: Category & Language */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Category Picker */}
          <div className="flex bg-slate-200/80 p-1.5 rounded-2xl shadow-inner w-full sm:w-auto">
            <button
              onClick={() => {
                playSound('click');
                setCategory('numbers');
              }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2 rounded-xl font-bold text-sm transition ${
                category === 'numbers'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen size={16} />
              <span>Numbers (1-100)</span>
            </button>
            <button
              onClick={() => {
                playSound('click');
                setCategory('months');
              }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2 rounded-xl font-bold text-sm transition ${
                category === 'months'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calendar size={16} />
              <span>Traditional Months</span>
            </button>
          </div>

          {/* Language Selector Dropdown */}
          <LanguageSelector
            currentLang={selectedLanguage}
            onSelect={(code: LanguageCode) => setSelectedLanguage(code)}
          />
        </div>

        {/* Language Pills for 1-click selection */}
        <div className="flex justify-center">
          <LanguageSelector
            currentLang={selectedLanguage}
            onSelect={(code: LanguageCode) => setSelectedLanguage(code)}
            variant="pills"
          />
        </div>
      </div>

      {/* Modes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {modes.map((mode) => {
          const Icon = mode.icon;
          return (
            <Link
              key={mode.level}
              to={`/practice/${category}/${selectedLanguage}/${mode.level}`}
              onClick={() => playSound('click')}
              className="group block"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/90 group-hover:border-indigo-300 group-hover:shadow-md transition flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${mode.bgGrad} text-white shadow-md`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {mode.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-800 group-hover:text-indigo-600 transition mb-1">
                    {mode.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {mode.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600">
                  <span>Start 10-Question {langMeta.name} Quiz</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PracticeMenu;
