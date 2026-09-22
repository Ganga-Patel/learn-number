import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Keyboard, Mic } from 'lucide-react';

const PracticeMenu = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Practice Time</h1>
        <p className="text-gray-600 mt-2">Choose a level and test your knowledge!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/practice/easy">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-green-400 h-full flex flex-col items-center text-center transition">
            <div className="bg-green-100 p-4 rounded-full text-green-600 mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Easy</h2>
            <p className="text-gray-500 text-sm">Multiple choice questions. Find the matching number.</p>
          </motion.div>
        </Link>

        <Link to="/practice/medium">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-blue-400 h-full flex flex-col items-center text-center transition">
            <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-4">
              <Keyboard size={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Intermediate</h2>
            <p className="text-gray-500 text-sm">Type the number name in Gujarati or Hindi.</p>
          </motion.div>
        </Link>

        <Link to="/practice/hard">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-red-400 h-full flex flex-col items-center text-center transition">
            <div className="bg-red-100 p-4 rounded-full text-red-600 mb-4">
              <Mic size={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Hard</h2>
            <p className="text-gray-500 text-sm">Speak the correct answer using your microphone.</p>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default PracticeMenu;
