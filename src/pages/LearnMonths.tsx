import React from 'react';
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import { gujaratiMonths, hindiMonths } from '../data/months';
import { useStore } from '../store/useStore';

const LearnMonths = () => {
  const { markMonthLearned, progress } = useStore();

  const playAudio = (text: string, lang: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Learn Months</h1>
        <p className="text-gray-600 mt-1">Explore traditional months in Gujarati and Hindi calendars.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Gujarati Months</h2>
          <div className="space-y-3">
            {gujaratiMonths?.map((month, idx) => (
              <motion.div 
                key={month.english}
                whileHover={{ scale: 1.01 }}
                className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between"
                onClick={() => markMonthLearned(`gu-${month.english}`)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-mono w-6">{idx + 1}</span>
                  <div>
                    <p className="font-semibold text-gray-800">{month.native}</p>
                    <p className="text-sm text-gray-500">{month.english}</p>
                  </div>
                </div>
                <button onClick={(e) => { e.stopPropagation(); playAudio(month.native, 'gu-IN'); }} className="text-indigo-500 p-2 hover:bg-indigo-50 rounded-full">
                  <Volume2 size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Hindi Months</h2>
          <div className="space-y-3">
            {hindiMonths?.map((month, idx) => (
              <motion.div 
                key={month.english}
                whileHover={{ scale: 1.01 }}
                className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between"
                onClick={() => markMonthLearned(`hi-${month.english}`)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-mono w-6">{idx + 1}</span>
                  <div>
                    <p className="font-semibold text-gray-800">{month.native}</p>
                    <p className="text-sm text-gray-500">{month.english}</p>
                  </div>
                </div>
                <button onClick={(e) => { e.stopPropagation(); playAudio(month.native, 'hi-IN'); }} className="text-indigo-500 p-2 hover:bg-indigo-50 rounded-full">
                  <Volume2 size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMonths;
