import React from 'react';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import { Trophy, Target, BookCheck, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { progress } = useStore();
  
  const accuracy = progress.totalAttempts > 0 
    ? Math.round((progress.correctAttempts / progress.totalAttempts) * 100) 
    : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Your Progress Dashboard</h1>
        <p className="text-gray-600 mt-2">Track your learning journey and accuracy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><BookCheck size={24} /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Numbers Learned</p>
            <p className="text-2xl font-bold text-gray-800">{progress.numbersLearned.length}</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-lg text-purple-600"><CalendarDays size={24} /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Months Learned</p>
            <p className="text-2xl font-bold text-gray-800">{progress.monthsLearned.length}</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-lg text-green-600"><Target size={24} /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Accuracy</p>
            <p className="text-2xl font-bold text-gray-800">{accuracy}%</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-amber-100 p-3 rounded-lg text-amber-600"><Trophy size={24} /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Score</p>
            <p className="text-2xl font-bold text-gray-800">
              {progress.scores.easy + progress.scores.medium + progress.scores.hard}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/learn-numbers" className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 p-4 rounded-lg text-center font-medium transition">
            Learn Numbers
          </Link>
          <Link to="/learn-months" className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 p-4 rounded-lg text-center font-medium transition">
            Learn Months
          </Link>
          <Link to="/practice" className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-lg text-center font-medium transition">
            Start Practice
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
