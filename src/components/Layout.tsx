import { useState } from 'react';
import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import {
  BookOpen,
  Calendar,
  Gamepad2,
  LayoutDashboard,
  LogOut,
  Flame,
  Volume2,
  RotateCcw,
  Menu,
  X,
  Layers,
  Search
} from 'lucide-react';
import { playSound } from '../utils/sound';

const Layout = () => {
  const { username, logout, progress, audioSpeed, setAudioSpeed, resetProgress } = useStore();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const handleLogout = () => {
    playSound('click');
    logout();
    navigate('/login');
  };

  const handleReset = () => {
    playSound('click');
    resetProgress();
    setShowResetModal(false);
  };

  const toggleSpeed = () => {
    playSound('click');
    setAudioSpeed(audioSpeed === 0.9 ? 0.75 : 0.9);
  };

  const navLinks = [
    { to: '/', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/learn-numbers', label: 'Numbers (1-100)', icon: BookOpen },
    { to: '/learn-months', label: 'Months', icon: Calendar },
    { to: '/flashcards', label: 'Flashcards', icon: Layers },
    { to: '/practice', label: 'Practice Quiz', icon: Gamepad2 },
    { to: '/lookup', label: 'Number Finder', icon: Search },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased">
      {/* Top Header */}
      <header className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-600 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg bg-indigo-800/60 hover:bg-indigo-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link to="/" className="text-xl font-black tracking-tight flex items-center gap-2 group">
              <span className="p-2 bg-white/20 rounded-xl group-hover:scale-105 transition">
                <BookOpen size={20} className="text-amber-300" />
              </span>
              <span>
                Learn<span className="text-amber-300">GujHindi</span>
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Streak Badge */}
            <div className="flex items-center gap-1.5 bg-amber-500/20 border border-amber-300/30 px-2.5 py-1 rounded-full text-amber-200 text-xs sm:text-sm font-bold">
              <Flame size={16} className="text-amber-400 fill-amber-400 animate-pulse" />
              <span>{progress.streak || 0} Streak</span>
            </div>

            {/* Audio Speed Toggle */}
            <button
              onClick={toggleSpeed}
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-lg text-xs font-medium transition"
              title="Toggle audio pronunciation speed"
            >
              <Volume2 size={14} />
              <span>{audioSpeed < 0.85 ? 'Slow (0.75x)' : 'Normal (0.9x)'}</span>
            </button>

            {/* User Greeting & Logout */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline font-medium text-sm text-indigo-100">
                Hi, <strong className="text-white">{username}</strong>
              </span>
              <button
                onClick={() => setShowResetModal(true)}
                className="p-1.5 text-indigo-200 hover:text-white hover:bg-indigo-800/50 rounded-lg transition"
                title="Reset learning stats"
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 bg-indigo-900/60 hover:bg-indigo-900 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition"
              >
                <LogOut size={14} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Navigation */}
      <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-[57px] z-40 hidden md:block">
        <div className="container mx-auto px-4 flex gap-1 overflow-x-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50 font-bold'
                      : 'border-transparent text-slate-600 hover:text-indigo-600 hover:border-slate-300'
                  }`
                }
              >
                <Icon size={16} />
                {link.label}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600 font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                <Icon size={18} />
                {link.label}
              </NavLink>
            );
          })}
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 max-w-5xl">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-slate-500 text-xs">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Learn Gujarati & Hindi. An interactive language learning platform.</p>
          <div className="flex gap-4">
            <span className="text-slate-400">100 Numbers • 24 Traditional Months</span>
          </div>
        </div>
      </footer>

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Reset Learning Progress?</h3>
            <p className="text-sm text-slate-500 mb-6">
              This will clear all your learned numbers, months, practice scores, and streaks. This cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-sm font-semibold transition"
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
              >
                Yes, Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
