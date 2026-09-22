import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { numbersData } from '../data/numbers';
import { useStore } from '../store/useStore';
import { Mic, Check, X, ArrowRight } from 'lucide-react';

const PracticeSession = () => {
  const { level } = useParams();
  const navigate = useNavigate();
  const { updateScore, recordAttempt } = useStore();
  
  const [currentNum, setCurrentNum] = useState<any>(null);
  const [options, setOptions] = useState<any[]>([]);
  const [lang, setLang] = useState<'gu' | 'hi'>('gu');
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    if (!numbersData || numbersData.length === 0) return;
    
    setFeedback('idle');
    setUserInput('');
    const randomLang = Math.random() > 0.5 ? 'gu' : 'hi';
    setLang(randomLang);
    
    const randomNum = numbersData[Math.floor(Math.random() * numbersData.length)];
    setCurrentNum(randomNum);

    if (level === 'easy') {
      const opts = [randomNum];
      while (opts.length < 4) {
        const fakeOpt = numbersData[Math.floor(Math.random() * numbersData.length)];
        if (!opts.find(o => o.english === fakeOpt.english)) {
          opts.push(fakeOpt);
        }
      }
      setOptions(opts.sort(() => Math.random() - 0.5));
    }
  };

  const checkAnswer = (answer: string) => {
    if (feedback !== 'idle' || !currentNum) return;
    
    const isCorrect = level === 'easy' 
      ? answer === currentNum.english.toString()
      : answer.trim() === (lang === 'gu' ? currentNum.gujaratiName : currentNum.hindiName);

    setFeedback(isCorrect ? 'correct' : 'incorrect');
    recordAttempt(isCorrect);
    if (isCorrect) {
      updateScore(level as any, level === 'easy' ? 10 : level === 'medium' ? 20 : 30);
    }
  };

  const toggleListen = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Your browser doesn't support speech recognition.");
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = lang === 'gu' ? 'gu-IN' : 'hi-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onspeechend = () => recognition.stop();
    recognition.onend = () => setIsListening(false);
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setUserInput(transcript);
      checkAnswer(transcript);
    };

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  if (!currentNum) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold capitalize text-gray-800">{level} Practice</h1>
        <button onClick={() => navigate('/practice')} className="text-indigo-600 hover:underline">Exit</button>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
        <p className="text-gray-500 mb-2">What is the {lang === 'gu' ? 'Gujarati' : 'Hindi'} for</p>
        <h2 className="text-6xl font-bold text-indigo-600 mb-8">{currentNum.english}</h2>

        {level === 'easy' && (
          <div className="grid grid-cols-2 gap-4">
            {options.map((opt) => (
              <button
                key={opt.english}
                onClick={() => checkAnswer(opt.english.toString())}
                disabled={feedback !== 'idle'}
                className="p-4 border-2 border-gray-100 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition text-xl font-medium"
              >
                {lang === 'gu' ? opt.gujaratiName : opt.hindiName}
              </button>
            ))}
          </div>
        )}

        {level === 'medium' && (
          <div className="space-y-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={feedback !== 'idle'}
              className="w-full text-center text-2xl p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500"
              placeholder={`Type in ${lang === 'gu' ? 'Gujarati' : 'Hindi'} (Unicode)...`}
              onKeyDown={(e) => e.key === 'Enter' && checkAnswer(userInput)}
            />
            <button
              onClick={() => checkAnswer(userInput)}
              disabled={feedback !== 'idle' || !userInput}
              className="w-full bg-indigo-600 text-white p-4 rounded-xl font-bold hover:bg-indigo-700 transition disabled:opacity-50"
            >
              Check Answer
            </button>
          </div>
        )}

        {level === 'hard' && (
          <div className="space-y-6">
            <div className="flex justify-center">
              <button
                onClick={toggleListen}
                disabled={feedback !== 'idle'}
                className={`p-8 rounded-full transition ${isListening ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'} disabled:opacity-50`}
              >
                <Mic size={48} />
              </button>
            </div>
            {userInput && (
              <p className="text-xl">You said: <span className="font-semibold">{userInput}</span></p>
            )}
            {!userInput && !isListening && (
              <p className="text-gray-500">Tap the mic and speak the answer in {lang === 'gu' ? 'Gujarati' : 'Hindi'}</p>
            )}
          </div>
        )}
      </div>

      {feedback !== 'idle' && (
        <div className={`p-6 rounded-2xl flex items-center justify-between ${feedback === 'correct' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <div className="flex items-center gap-3">
            {feedback === 'correct' ? <Check size={28} /> : <X size={28} />}
            <div>
              <p className="font-bold text-lg">{feedback === 'correct' ? 'Correct!' : 'Incorrect'}</p>
              {feedback === 'incorrect' && (
                <p>The correct answer is: {lang === 'gu' ? currentNum.gujaratiName : currentNum.hindiName}</p>
              )}
            </div>
          </div>
          <button
            onClick={generateQuestion}
            className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg font-bold shadow-sm hover:shadow transition"
          >
            Next <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default PracticeSession;
