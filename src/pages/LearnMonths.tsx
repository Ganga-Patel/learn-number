import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Volume2,
  CheckCircle2,
  Circle,
  Calendar,
  Sparkles,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { gujaratiMonths, hindiMonths, type MonthItem } from '../data/months';
import { useStore } from '../store/useStore';
import { speakText } from '../utils/speech';
import { playSound } from '../utils/sound';

const LearnMonths = () => {
  const { toggleMonthLearned, progress, audioSpeed } = useStore();
  const [activeTab, setActiveTab] = useState<'both' | 'gu' | 'hi'>('both');
  const [activeSpeakingMonth, setActiveSpeakingMonth] = useState<string | null>(null);

  const handleSpeak = async (month: MonthItem, lang: 'gu' | 'hi', e?: React.MouseEvent) => {
    e?.stopPropagation();
    playSound('click');
    setActiveSpeakingMonth(month.id);
    await speakText(month.native, lang, audioSpeed);
    setActiveSpeakingMonth(null);
  };

  const handleToggle = (monthId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    playSound('click');
    toggleMonthLearned(monthId);
  };

  const gujLearnedCount = gujaratiMonths.filter((m) => progress.monthsLearned.includes(m.id)).length;
  const hinLearnedCount = hindiMonths.filter((m) => progress.monthsLearned.includes(m.id)).length;
  const totalLearned = gujLearnedCount + hinLearnedCount;

  const renderMonthCard = (month: MonthItem, lang: 'gu' | 'hi') => {
    const isLearned = progress.monthsLearned.includes(month.id);
    const isSpeaking = activeSpeakingMonth === month.id;

    return (
      <motion.div
        key={month.id}
        whileHover={{ y: -3, scale: 1.01 }}
        onClick={() => handleToggle(month.id)}
        className={`bg-white rounded-2xl p-4 sm:p-5 border shadow-sm transition-all cursor-pointer flex flex-col justify-between ${
          isLearned
            ? 'border-emerald-300 ring-2 ring-emerald-500/20 bg-emerald-50/20'
            : 'border-slate-200/90 hover:border-indigo-300'
        }`}
      >
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-black font-mono px-2.5 py-0.5 rounded-lg bg-indigo-50 text-indigo-700">
              Month #{month.order}
            </span>
            <button
              onClick={(e) => handleToggle(month.id, e)}
              className={`p-1 rounded-full transition ${
                isLearned
                  ? 'text-emerald-600 hover:text-emerald-700'
                  : 'text-slate-300 hover:text-slate-500'
              }`}
              title={isLearned ? 'Learned! Click to unmark' : 'Click to mark as learned'}
            >
              {isLearned ? <CheckCircle2 size={20} className="fill-emerald-100" /> : <Circle size={20} />}
            </button>
          </div>

          {/* Month Names */}
          <div className="mb-3">
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">{month.native}</h3>
              <span className="text-sm font-bold text-indigo-600 font-mono">({month.transliteration})</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">English: {month.english}</p>
          </div>

          {/* Meta details: Gregorian & Season & Festival */}
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center gap-1.5 text-slate-600">
              <Calendar size={13} className="text-slate-400" />
              <span>Gregorian: <strong>{month.gregorian}</strong></span>
            </div>
            <div className="text-slate-500">
              Season: <span className="font-semibold text-slate-700">{month.season}</span>
            </div>
            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 text-slate-600 text-[11px] leading-relaxed">
              🎉 <strong>Festivals:</strong> {month.festival}
            </div>
          </div>
        </div>

        {/* Audio Listen */}
        <button
          onClick={(e) => handleSpeak(month, lang, e)}
          className={`mt-4 w-full py-2 px-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition ${
            isSpeaking
              ? 'bg-indigo-600 text-white animate-pulse'
              : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-100'
          }`}
        >
          <Volume2 size={15} />
          <span>{isSpeaking ? 'Playing Pronunciation...' : 'Listen to Pronunciation'}</span>
        </button>
      </motion.div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Title & Language View Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">Traditional Indian Months</h1>
            <span className="text-xs bg-purple-100 text-purple-700 font-bold px-2.5 py-1 rounded-full">
              24 Total
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Master the 12 Gujarati (Vikram Samvat) and 12 Hindi (National Saka) lunar calendar months.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/flashcards"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 shadow-sm transition"
          >
            <Layers size={15} />
            <span>Flashcards</span>
          </Link>

          <div className="flex bg-slate-200/80 p-1 rounded-xl text-xs sm:text-sm font-bold">
            <button
              onClick={() => {
                playSound('click');
                setActiveTab('both');
              }}
              className={`px-3 py-1.5 rounded-lg transition ${
                activeTab === 'both' ? 'bg-white shadow text-indigo-600' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Both Calendars
            </button>
            <button
              onClick={() => {
                playSound('click');
                setActiveTab('gu');
              }}
              className={`px-3 py-1.5 rounded-lg transition ${
                activeTab === 'gu' ? 'bg-white shadow text-indigo-600' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Gujarati ({gujLearnedCount}/12)
            </button>
            <button
              onClick={() => {
                playSound('click');
                setActiveTab('hi');
              }}
              className={`px-3 py-1.5 rounded-lg transition ${
                activeTab === 'hi' ? 'bg-white shadow text-indigo-600' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hindi ({hinLearnedCount}/12)
            </button>
          </div>
        </div>
      </div>

      {/* Progress banner */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-1.5 text-xs font-semibold text-slate-600">
          <span className="flex items-center gap-1.5">
            <Sparkles size={14} className="text-amber-500" />
            <span>Months Learned Progress</span>
          </span>
          <span className="font-bold text-indigo-600">
            {totalLearned} / 24 ({Math.round((totalLearned / 24) * 100)}%)
          </span>
        </div>
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${(totalLearned / 24) * 100}%` }}
          />
        </div>
      </div>

      {/* Calendars Container */}
      <div className="space-y-8">
        {(activeTab === 'both' || activeTab === 'gu') && (
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
              <div>
                <h2 className="text-xl font-black text-slate-800">
                  ગુજરાતી મહિના (Gujarati Months)
                </h2>
                <p className="text-xs text-slate-500">
                  Vikram Samvat calendar starts with Kartik immediately following Diwali
                </p>
              </div>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">
                {gujLearnedCount} / 12 Learned
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gujaratiMonths.map((m) => renderMonthCard(m, 'gu'))}
            </div>
          </div>
        )}

        {(activeTab === 'both' || activeTab === 'hi') && (
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
              <div>
                <h2 className="text-xl font-black text-slate-800">
                  हिन्दी महीने (Hindi / Hindu Months)
                </h2>
                <p className="text-xs text-slate-500">
                  Traditional Chaitradi calendar begins with Chaitra during Spring (March - April)
                </p>
              </div>
              <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg">
                {hinLearnedCount} / 12 Learned
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hindiMonths.map((m) => renderMonthCard(m, 'hi'))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnMonths;
