import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
// We'll import real data when available, using dummy data structure for now if missing
import { numbersData } from '../data/numbers';
import { useStore } from '../store/useStore';

const LearnNumbers = () => {
  const { markNumberLearned, progress } = useStore();
  const [page, setPage] = useState(0);
  const itemsPerPage = 20;
  
  const currentNumbers = numbersData?.slice(page * itemsPerPage, (page + 1) * itemsPerPage) || [];
  const totalPages = Math.ceil((numbersData?.length || 0) / itemsPerPage);

  const playAudio = (text: string, lang: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang; // 'gu-IN' or 'hi-IN'
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Learn Numbers</h1>
          <p className="text-gray-600 mt-1">Listen and memorize numbers from 1 to 100.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentNumbers.map((num) => {
          const isLearned = progress.numbersLearned.includes(num.english);
          return (
            <motion.div 
              key={num.english}
              whileHover={{ scale: 1.02 }}
              className={`bg-white p-4 rounded-xl shadow-sm border ${isLearned ? 'border-green-200' : 'border-gray-100'}`}
              onClick={() => markNumberLearned(num.english)}
            >
              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-indigo-600">{num.english}</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                  <div>
                    <p className="text-sm text-gray-500">Gujarati</p>
                    <p className="font-semibold">{num.gujarati} ({num.gujaratiName})</p>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); playAudio(num.gujaratiName, 'gu-IN'); }} className="text-indigo-500 p-1 hover:bg-indigo-100 rounded-full">
                    <Volume2 size={18} />
                  </button>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                  <div>
                    <p className="text-sm text-gray-500">Hindi</p>
                    <p className="font-semibold">{num.hindi} ({num.hindiName})</p>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); playAudio(num.hindiName, 'hi-IN'); }} className="text-indigo-500 p-1 hover:bg-indigo-100 rounded-full">
                    <Volume2 size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <button 
            disabled={page === 0} 
            onClick={() => setPage(p => p - 1)}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-4 py-2 text-gray-600">Page {page + 1} of {totalPages}</span>
          <button 
            disabled={page === totalPages - 1} 
            onClick={() => setPage(p => p + 1)}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default LearnNumbers;
