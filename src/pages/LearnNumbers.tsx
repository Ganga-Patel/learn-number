import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import { numbersData } from '../data/numbers';
import { useStore } from '../store/useStore';

const LearnNumbers = () => {
  const { markNumberLearned, progress } = useStore();
  const [page, setPage] = useState(0);
  const [lang, setLang] = useState<'gu' | 'hi'>('gu');
  const itemsPerPage = 20;
  
  const currentNumbers = numbersData?.slice(page * itemsPerPage, (page + 1) * itemsPerPage) || [];
  const totalPages = Math.ceil((numbersData?.length || 0) / itemsPerPage);

  const playAudio = (text: string, langCode: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Learn Numbers</h1>
          <p className="text-gray-600 mt-1">Listen and memorize numbers from 1 to 100.</p>
        </div>
        
        <div className="flex bg-gray-200 p-1 rounded-lg">
          <button 
            className={`px-4 py-2 rounded-md font-medium transition ${lang === 'gu' ? 'bg-white shadow text-indigo-600' : 'text-gray-600 hover:text-gray-900'}`}
            onClick={() => setLang('gu')}
          >
            Gujarati
          </button>
          <button 
            className={`px-4 py-2 rounded-md font-medium transition ${lang === 'hi' ? 'bg-white shadow text-indigo-600' : 'text-gray-600 hover:text-gray-900'}`}
            onClick={() => setLang('hi')}
          >
            Hindi
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {currentNumbers.map((num) => {
          const isLearned = progress.numbersLearned.includes(num.english);
          return (
            <motion.div 
              key={num.english}
              whileHover={{ scale: 1.05 }}
              className={`bg-white p-4 rounded-xl shadow-sm border ${isLearned ? 'border-green-200' : 'border-gray-100'} flex flex-col items-center cursor-pointer hover:shadow-md transition`}
              onClick={() => markNumberLearned(num.english)}
            >
              <div className="text-gray-500 mb-2 font-mono">{num.english}</div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {lang === 'gu' ? num.gujarati : num.hindi}
              </div>
              <div className="font-medium text-gray-800 text-lg mb-3">
                {lang === 'gu' ? num.gujaratiName : num.hindiName}
              </div>
              <button 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  playAudio(lang === 'gu' ? num.gujaratiName : num.hindiName, lang === 'gu' ? 'gu-IN' : 'hi-IN'); 
                }} 
                className="text-indigo-500 p-2 hover:bg-indigo-50 rounded-full w-full flex justify-center items-center gap-2"
              >
                <Volume2 size={16} /> Listen
              </button>
            </motion.div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <button 
            disabled={page === 0} 
            onClick={() => setPage(p => p - 1)}
            className="px-4 py-2 border bg-white rounded-lg disabled:opacity-50 hover:bg-gray-50"
          >
            Prev
          </button>
          <span className="px-4 py-2 text-gray-600 font-medium bg-white rounded-lg border">Page {page + 1} of {totalPages}</span>
          <button 
            disabled={page === totalPages - 1} 
            onClick={() => setPage(p => p + 1)}
            className="px-4 py-2 border bg-white rounded-lg disabled:opacity-50 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default LearnNumbers;
