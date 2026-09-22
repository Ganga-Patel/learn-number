import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [name, setName] = useState('');
  const { login, continueAsGuest } = useStore();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      login(name.trim());
      navigate('/');
    }
  };

  const handleGuest = () => {
    continueAsGuest();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-indigo-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-indigo-100 p-4 rounded-full text-indigo-600">
            <BookOpen size={40} />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Learn Gujarati & Hindi</h1>
        <p className="text-center text-gray-500 mb-8">Master numbers and months easily!</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
            />
          </div>
          <button 
            type="submit" 
            disabled={!name.trim()}
            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 transition"
          >
            Start Learning
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center space-x-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button 
          onClick={handleGuest}
          className="w-full mt-6 bg-gray-100 text-gray-700 p-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Continue as Guest
        </button>
      </motion.div>
    </div>
  );
};

export default Login;
