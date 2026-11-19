import { useState } from 'react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Sparkles, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { playSound } from '../utils/sound';

const Login = () => {
  const [name, setName] = useState('');
  const { login, continueAsGuest } = useStore();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      playSound('click');
      login(name.trim());
      navigate('/');
    }
  };

  const handleGuest = () => {
    playSound('click');
    continueAsGuest();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle ambient blur bubbles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl w-full max-w-md relative z-10 border border-slate-100"
      >
        <div className="flex justify-center mb-5">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-4 rounded-2xl text-white shadow-lg">
            <BookOpen size={36} className="text-amber-300" />
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-2">
            <Sparkles size={13} className="text-amber-500" />
            <span>Gujarati & Hindi Master</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
            Start Your Journey
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Master 100 numbers, 24 traditional months, voice pronunciation & quizzes.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Your Name
            </label>
            <div className="relative">
              <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
                placeholder="Enter your name (e.g. Aarav)"
                autoFocus
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-md hover:shadow transition disabled:opacity-40 flex items-center justify-center gap-2"
          >
            <span>Begin Learning</span>
            <ArrowRight size={16} />
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center space-x-4">
          <div className="flex-1 border-t border-slate-200" />
          <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">OR</span>
          <div className="flex-1 border-t border-slate-200" />
        </div>

        <button
          onClick={handleGuest}
          className="w-full mt-6 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-xl font-bold text-xs transition flex items-center justify-center gap-2"
        >
          <ShieldCheck size={16} />
          <span>Continue as Guest</span>
        </button>

        {/* Feature Highlights */}
        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-[11px] text-slate-500 font-medium">
          <div className="bg-slate-50 p-2 rounded-xl">🔢 1 - 100 Numbers</div>
          <div className="bg-slate-50 p-2 rounded-xl">🗓️ 24 Lunar Months</div>
          <div className="bg-slate-50 p-2 rounded-xl">🎤 Voice Pronunciation</div>
          <div className="bg-slate-50 p-2 rounded-xl">🃏 3D Flashcards</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
