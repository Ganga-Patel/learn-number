import { useState } from 'react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Sparkles,
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  UserPlus,
  LogIn,
  KeyRound
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { playSound } from '../utils/sound';

const Login = () => {
  const [mode, setMode] = useState<'signin' | 'register'>('signin');

  // Sign In form fields
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Register form fields
  const [regDisplayName, setRegDisplayName] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);

  // Error feedback
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState(false);

  const { login, register } = useStore();
  const navigate = useNavigate();

  const triggerError = (msg: string) => {
    playSound('incorrect');
    setErrorMessage(msg);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!loginUsername.trim()) {
      triggerError('Please enter your username.');
      return;
    }
    if (!loginPassword) {
      triggerError('Please enter your password.');
      return;
    }

    const result = login(loginUsername, loginPassword);
    if (!result.success) {
      // Password or username is incorrect - DO NOT ALLOW ENTRY
      triggerError(result.error || 'Incorrect password! Access denied.');
      return;
    }

    // Success
    playSound('correct');
    navigate('/');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!regUsername.trim()) {
      triggerError('Please choose a username.');
      return;
    }
    if (regPassword.length < 4) {
      triggerError('Password must be at least 4 characters long.');
      return;
    }
    if (regPassword !== regConfirmPassword) {
      triggerError('Passwords do not match. Please re-enter.');
      return;
    }

    const result = register(regUsername, regPassword, regDisplayName);
    if (!result.success) {
      triggerError(result.error || 'Failed to create account.');
      return;
    }

    // Success
    playSound('correct');
    navigate('/');
  };

  const handleQuickFill = (u: string, p: string) => {
    playSound('click');
    setMode('signin');
    setLoginUsername(u);
    setLoginPassword(p);
    setErrorMessage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-950 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        animate={isShaking ? { x: [-10, 10, -8, 8, -4, 4, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl w-full max-w-md relative z-10 border border-slate-100"
      >
        {/* App Logo & Header */}
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-3.5 rounded-2xl text-white shadow-lg">
            <BookOpen size={32} className="text-amber-300" />
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-1.5">
            <Sparkles size={13} className="text-amber-500" />
            <span>Pan-Indian Languages Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
            {mode === 'signin' ? 'Sign In to Account' : 'Create New Account'}
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            {mode === 'signin'
              ? 'Enter your username and password to access your learning portal.'
              : 'Register your personalized account to save learning progress.'}
          </p>
        </div>

        {/* Tab Switcher: Sign In vs Register */}
        <div className="flex bg-slate-100 p-1 rounded-2xl mb-6 text-xs font-bold">
          <button
            type="button"
            onClick={() => {
              playSound('click');
              setMode('signin');
              setErrorMessage(null);
            }}
            className={`flex-1 py-2.5 rounded-xl transition flex items-center justify-center gap-2 ${
              mode === 'signin'
                ? 'bg-white shadow text-indigo-700 font-extrabold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <LogIn size={15} />
            <span>Sign In</span>
          </button>
          <button
            type="button"
            onClick={() => {
              playSound('click');
              setMode('register');
              setErrorMessage(null);
            }}
            className={`flex-1 py-2.5 rounded-xl transition flex items-center justify-center gap-2 ${
              mode === 'register'
                ? 'bg-white shadow text-indigo-700 font-extrabold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserPlus size={15} />
            <span>Create Account</span>
          </button>
        </div>

        {/* Error Alert Banner */}
        <AnimatePresence>
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-xs flex items-start gap-2.5 shadow-sm"
            >
              <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Authentication Failed</p>
                <p className="mt-0.5 text-red-600">{errorMessage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form: SIGN IN */}
        {mode === 'signin' && (
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Username
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={loginUsername}
                  onChange={(e) => {
                    setLoginUsername(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition ${
                    errorMessage ? 'border-red-300' : 'border-slate-200'
                  }`}
                  placeholder="e.g. student"
                  autoFocus
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showLoginPassword ? 'text' : 'password'}
                  value={loginPassword}
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  className={`w-full pl-10 pr-11 py-3 bg-slate-50 border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition ${
                    errorMessage ? 'border-red-300' : 'border-slate-200'
                  }`}
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  title={showLoginPassword ? 'Hide password' : 'Show password'}
                >
                  {showLoginPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={!loginUsername.trim() || !loginPassword}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-md hover:shadow transition disabled:opacity-40 flex items-center justify-center gap-2 mt-2"
            >
              <span>Sign In with Password</span>
              <ArrowRight size={16} />
            </button>

            {/* Quick Demo Credentials helper */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center mb-2 flex items-center justify-center gap-1">
                <KeyRound size={13} />
                <span>Pre-configured Demo Accounts</span>
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => handleQuickFill('student', 'password123')}
                  className="p-2 rounded-xl bg-indigo-50/70 hover:bg-indigo-100/70 border border-indigo-100 text-indigo-700 text-left transition"
                >
                  <p className="font-bold text-[11px]">Student Account</p>
                  <p className="text-[10px] text-indigo-500">student / password123</p>
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickFill('admin', 'admin123')}
                  className="p-2 rounded-xl bg-purple-50/70 hover:bg-purple-100/70 border border-purple-100 text-purple-700 text-left transition"
                >
                  <p className="font-bold text-[11px]">Admin Account</p>
                  <p className="text-[10px] text-purple-500">admin / admin123</p>
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Form: CREATE ACCOUNT / REGISTER */}
        {mode === 'register' && (
          <form onSubmit={handleRegister} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                value={regDisplayName}
                onChange={(e) => setRegDisplayName(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
                placeholder="e.g. Aarav Patel"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Choose Username
              </label>
              <div className="relative">
                <User size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={regUsername}
                  onChange={(e) => {
                    setRegUsername(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
                  placeholder="e.g. aarav123 (letters, numbers)"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Create Password
              </label>
              <div className="relative">
                <Lock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showRegPassword ? 'text' : 'password'}
                  value={regPassword}
                  onChange={(e) => {
                    setRegPassword(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  className="w-full pl-10 pr-11 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
                  placeholder="Min. 4 characters"
                />
                <button
                  type="button"
                  onClick={() => setShowRegPassword(!showRegPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  {showRegPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <Lock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showRegPassword ? 'text' : 'password'}
                  value={regConfirmPassword}
                  onChange={(e) => {
                    setRegConfirmPassword(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
                  placeholder="Repeat your password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!regUsername.trim() || !regPassword || !regConfirmPassword}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md hover:shadow transition disabled:opacity-40 flex items-center justify-center gap-2 mt-4"
            >
              <CheckCircle2 size={16} />
              <span>Create Account & Start Learning</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Login;
