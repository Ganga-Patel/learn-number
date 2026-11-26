import { useState } from 'react';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import {
  Trophy,
  Target,
  BookCheck,
  CalendarDays,
  Flame,
  ArrowRight,
  Volume2,
  Sparkles,
  Award,
  Layers,
  Gamepad2,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { numbersData, getNumberForLang, type NumberItem } from '../data/numbers';
import { speakText } from '../utils/speech';
import { LanguageSelector } from '../components/LanguageSelector';
import { getLanguageMeta } from '../data/languages';

const Dashboard = () => {
  const { username, progress, audioSpeed, selectedLanguage, setSelectedLanguage } = useStore();
  const [quickSearch, setQuickSearch] = useState('');
  const [activeVoiceNumber, setActiveVoiceNumber] = useState<number | null>(null);

  const langMeta = getLanguageMeta(selectedLanguage);

  const accuracy = progress.totalAttempts > 0
    ? Math.round((progress.correctAttempts / progress.totalAttempts) * 100)
    : 0;

  const totalScore = (progress.scores.easy || 0) + (progress.scores.medium || 0) + (progress.scores.hard || 0);

  const numCount = progress.numbersLearned.length;
  const monthCount = progress.monthsLearned.length;

  const handleSpeak = async (num: NumberItem, langCode: string) => {
    setActiveVoiceNumber(num.english);
    const detail = getNumberForLang(num, langCode);
    await speakText(detail.name, langCode, audioSpeed, detail.translit);
    setActiveVoiceNumber(null);
  };

  const filteredNumbers = quickSearch.trim()
    ? numbersData.filter((item) => {
        const query = quickSearch.trim().toLowerCase();
        const d = getNumberForLang(item, selectedLanguage);
        return (
          item.english.toString() === query ||
          d.digit.includes(query) ||
          d.name.toLowerCase().includes(query) ||
          d.translit.toLowerCase().includes(query)
        );
      }).slice(0, 4)
    : [];

  const achievements = [
    {
      id: 'first-num',
      name: 'First Step',
      desc: 'Learn your first number',
      icon: '🌱',
      unlocked: numCount >= 1,
    },
    {
      id: 'ten-nums',
      name: 'Double Digits',
      desc: 'Master 10 numbers',
      icon: '🔟',
      unlocked: numCount >= 10,
    },
    {
      id: 'fifty-nums',
      name: 'Halfway Hero',
      desc: 'Master 50 numbers',
      icon: '⚡',
      unlocked: numCount >= 50,
    },
    {
      id: 'century',
      name: 'Century Club',
      desc: 'Learn all 100 numbers',
      icon: '💯',
      unlocked: numCount >= 100,
    },
    {
      id: 'calendar',
      name: 'Calendar Scholar',
      desc: 'Learn 12 months',
      icon: '🗓️',
      unlocked: monthCount >= 12,
    },
    {
      id: 'streak',
      name: 'On Fire',
      desc: 'Reach a 5-streak in practice',
      icon: '🔥',
      unlocked: (progress.bestStreak || 0) >= 5,
    },
    {
      id: 'accuracy',
      name: 'Sharp Mind',
      desc: '80%+ accuracy (10+ attempts)',
      icon: '🎯',
      unlocked: progress.totalAttempts >= 10 && accuracy >= 80,
    },
    {
      id: 'score-100',
      name: 'Quiz Champion',
      desc: 'Earn 100+ points',
      icon: '🏆',
      unlocked: totalScore >= 100,
    },
  ];

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <div className="space-y-8">
      {/* Hero Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={14} className="text-amber-300" />
              <span>Pan-Indian Languages Learning</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-amber-400/30 text-amber-200 px-3 py-1 rounded-full text-xs font-bold">
              <span>{langMeta.icon} {langMeta.name} Mode</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black mb-1">
            {langMeta.greeting}! Welcome back, {username || 'Learner'}!
          </h1>
          <p className="text-indigo-100 text-sm sm:text-base mb-6 leading-relaxed">
            Master 1-100 numbers and traditional calendars across 12 classical and regional Indian languages with quizzes, voice pronunciation, and flashcards.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/practice"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-amber-300 hover:text-indigo-950 font-bold px-5 py-2.5 rounded-xl shadow-lg transition text-sm"
            >
              <Gamepad2 size={18} />
              <span>Practice Quiz</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/flashcards"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-4 py-2.5 rounded-xl backdrop-blur-sm transition text-sm"
            >
              <Layers size={18} />
              <span>Flashcards</span>
            </Link>

            <LanguageSelector
              currentLang={selectedLanguage}
              onSelect={(code) => setSelectedLanguage(code)}
              className="ml-auto"
            />
          </div>
        </div>
      </div>

      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Numbers Learned */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Numbers</span>
            <div className="bg-blue-100 text-blue-600 p-2.5 rounded-xl">
              <BookCheck size={20} />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-black text-slate-800">{numCount}</span>
              <span className="text-xs font-medium text-slate-400">/ 100 learned</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (numCount / 100) * 100)}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Months Learned */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Months</span>
            <div className="bg-purple-100 text-purple-600 p-2.5 rounded-xl">
              <CalendarDays size={20} />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-black text-slate-800">{monthCount}</span>
              <span className="text-xs font-medium text-slate-400">months learned</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-purple-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (monthCount / 24) * 100)}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Accuracy */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Accuracy</span>
            <div className="bg-emerald-100 text-emerald-600 p-2.5 rounded-xl">
              <Target size={20} />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-black text-slate-800">{accuracy}%</span>
              <span className="text-xs font-medium text-slate-400">
                ({progress.correctAttempts}/{progress.totalAttempts} correct)
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${accuracy}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Total Score & Streak */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Score</span>
            <div className="bg-amber-100 text-amber-600 p-2.5 rounded-xl">
              <Trophy size={20} />
            </div>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-3xl font-black text-slate-800">{totalScore}</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                <Flame size={12} className="fill-amber-500 text-amber-500" />
                Streak: {progress.streak}
              </span>
            </div>
            <p className="text-xs text-slate-400">Best Streak: {progress.bestStreak || 0}</p>
          </div>
        </motion.div>
      </div>

      {/* Quick Lookup & Practice Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Number Search Tool */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Search size={18} className="text-indigo-600" />
                <span>Instant Number Lookup ({langMeta.name})</span>
              </h2>
              <p className="text-xs text-slate-500">
                Type any number (1-100) or word to hear pronunciation and view script.
              </p>
            </div>
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              value={quickSearch}
              onChange={(e) => setQuickSearch(e.target.value)}
              placeholder="e.g. 15, 25, 50, 100..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
            />
          </div>

          {filteredNumbers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredNumbers.map((num) => {
                const detail = getNumberForLang(num, selectedLanguage);
                return (
                  <div
                    key={num.english}
                    className="p-3.5 bg-slate-50 border border-slate-200/70 rounded-xl flex items-center justify-between hover:bg-indigo-50/50 hover:border-indigo-200 transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm font-mono">
                        {num.english}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-indigo-900">{detail.name}</span>
                          <span className="text-xs bg-indigo-100/70 text-indigo-700 px-1.5 py-0.5 rounded font-mono">
                            {detail.digit}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 font-mono">
                          {detail.translit}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleSpeak(num, selectedLanguage)}
                      className={`p-2 rounded-lg border text-xs flex items-center gap-1 transition ${
                        activeVoiceNumber === num.english
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white text-indigo-600 border-slate-200 hover:bg-indigo-50'
                      }`}
                      title={`Listen in ${langMeta.name}`}
                    >
                      <Volume2 size={14} /> Listen
                    </button>
                  </div>
                );
              })}
            </div>
          ) : quickSearch.trim() ? (
            <p className="text-xs text-slate-400 text-center py-4">No matching numbers found for "{quickSearch}".</p>
          ) : (
            <div className="text-xs text-slate-400 bg-slate-50 p-4 rounded-xl border border-dashed border-slate-200 flex items-center justify-center gap-2">
              <span>Try typing a number like <strong>5</strong>, <strong>21</strong>, <strong>50</strong>, or <strong>100</strong> above!</span>
            </div>
          )}
        </div>

        {/* Level Points Breakdown */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-1 flex items-center gap-2">
              <Award size={18} className="text-amber-500" />
              <span>Score Breakdown</span>
            </h2>
            <p className="text-xs text-slate-500 mb-4">Points earned across difficulty tiers</p>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl">
                <div>
                  <p className="font-semibold text-emerald-900 text-sm">Easy (Multiple Choice)</p>
                  <p className="text-xs text-emerald-600">+10 pts per correct answer</p>
                </div>
                <span className="text-lg font-bold text-emerald-700">{progress.scores.easy}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50/70 border border-blue-100 rounded-xl">
                <div>
                  <p className="font-semibold text-blue-900 text-sm">Medium (Typing)</p>
                  <p className="text-xs text-blue-600">+20 pts per correct answer</p>
                </div>
                <span className="text-lg font-bold text-blue-700">{progress.scores.medium}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-purple-50/70 border border-purple-100 rounded-xl">
                <div>
                  <p className="font-semibold text-purple-900 text-sm">Hard (Voice Speech)</p>
                  <p className="text-xs text-purple-600">+30 pts per correct answer</p>
                </div>
                <span className="text-lg font-bold text-purple-700">{progress.scores.hard}</span>
              </div>
            </div>
          </div>

          <Link
            to="/practice"
            className="mt-4 w-full bg-slate-900 hover:bg-indigo-600 text-white font-bold py-2.5 rounded-xl text-center text-sm transition block shadow-sm"
          >
            Launch Practice
          </Link>
        </div>
      </div>

      {/* Achievements Showcase */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Trophy size={18} className="text-amber-500" />
              <span>Achievements & Milestones</span>
            </h2>
            <p className="text-xs text-slate-500">
              Unlocked {unlockedCount} of {achievements.length} badges
            </p>
          </div>
          <span className="text-xs font-bold bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
            {Math.round((unlockedCount / achievements.length) * 100)}% Complete
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`p-3.5 rounded-xl border text-center transition ${
                ach.unlocked
                  ? 'bg-amber-50/60 border-amber-200 text-slate-800'
                  : 'bg-slate-50/80 border-slate-200/60 opacity-50 grayscale'
              }`}
            >
              <div className="text-2xl mb-1">{ach.icon}</div>
              <p className="font-bold text-xs text-slate-800">{ach.name}</p>
              <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{ach.desc}</p>
              <div className="mt-2">
                <span
                  className={`text-[9px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded-full ${
                    ach.unlocked ? 'bg-amber-200 text-amber-900' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {ach.unlocked ? 'Unlocked' : 'Locked'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
