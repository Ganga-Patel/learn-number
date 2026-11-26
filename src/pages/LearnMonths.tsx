import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Volume2,
  CheckCircle2,
  Circle,
  Calendar,
  Sparkles,
  Layers,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { calendarTraditions, type MonthItem } from '../data/months';
import { useStore } from '../store/useStore';
import { speakText } from '../utils/speech';
import { playSound } from '../utils/sound';
import { VoiceStatusNote } from '../components/VoiceStatusNote';

const LearnMonths = () => {
  const { toggleMonthLearned, progress, audioSpeed, selectedLanguage } = useStore();
  const [selectedTradition, setSelectedTradition] = useState<string>(
    calendarTraditions.some((t) => t.id === selectedLanguage) ? selectedLanguage : 'hi'
  );
  const [activeSpeakingMonth, setActiveSpeakingMonth] = useState<string | null>(null);

  const activeTraditionData =
    calendarTraditions.find((t) => t.id === selectedTradition) || calendarTraditions[0];

  const handleSpeak = async (month: MonthItem, lang: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveSpeakingMonth(month.id);
    await speakText(month.native, lang, audioSpeed, month.transliteration);
    setActiveSpeakingMonth(null);
  };

  const handleToggle = (monthId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    playSound('click');
    toggleMonthLearned(monthId);
  };

  const totalLearned = progress.monthsLearned.length;
  const traditionLearnedCount = activeTraditionData.months.filter((m) =>
    progress.monthsLearned.includes(m.id)
  ).length;

  const renderMonthCard = (month: MonthItem, lang: string) => {
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
      {/* Title & Flashcard Link */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">Traditional Indian Months</h1>
            <span className="text-xs bg-purple-100 text-purple-700 font-bold px-2.5 py-1 rounded-full">
              {calendarTraditions.length} Calendar Traditions
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Explore traditional lunar and solar calendars across India with seasons and festivals.
          </p>
        </div>

        <Link
          to="/flashcards"
          className="self-start md:self-auto flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 shadow-sm transition"
        >
          <Layers size={15} />
          <span>Flashcards</span>
        </Link>
      </div>

      {/* Calendar Tradition Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-400 font-bold flex items-center gap-1 mr-1">
          <Globe size={14} className="text-indigo-600" /> Tradition:
        </span>
        {calendarTraditions.map((tradition) => {
          const isSelected = tradition.id === selectedTradition;
          return (
            <button
              key={tradition.id}
              onClick={() => {
                playSound('click');
                setSelectedTradition(tradition.id);
              }}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {tradition.name}
            </button>
          );
        })}
      </div>

      <VoiceStatusNote
        lang={activeTraditionData.id}
        sampleText={activeTraditionData.months[0].native}
        sampleTranslit={activeTraditionData.months[0].transliteration}
      />

      {/* Progress banner */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-1.5 text-xs font-semibold text-slate-600">
          <span className="flex items-center gap-1.5">
            <Sparkles size={14} className="text-amber-500" />
            <span>{activeTraditionData.name} Months Learned</span>
          </span>
          <span className="font-bold text-indigo-600">
            {traditionLearnedCount} / 12 ({Math.round((traditionLearnedCount / 12) * 100)}%)
          </span>
        </div>
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${(traditionLearnedCount / 12) * 100}%` }}
          />
        </div>
      </div>

      {/* Month Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h2 className="text-xl font-black text-slate-800">
            {activeTraditionData.name}
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            Total across all calendars learned: <strong>{totalLearned}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeTraditionData.months.map((m) => renderMonthCard(m, activeTraditionData.id))}
        </div>
      </div>
    </div>
  );
};

export default LearnMonths;
