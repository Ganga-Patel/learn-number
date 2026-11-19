import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic,
  Check,
  X,
  ArrowRight,
  RotateCcw,
  Volume2,
  Trophy,
  Flame,
  Award,
  HelpCircle,
  Headphones
} from 'lucide-react';
import { numbersData, type NumberItem } from '../data/numbers';
import { gujaratiMonths, hindiMonths } from '../data/months';
import { useStore } from '../store/useStore';
import { speakText } from '../utils/speech';
import { playSound } from '../utils/sound';
import { checkAnswerMatch } from '../utils/transliterate';

interface QuizOption {
  id: string | number;
  label: string;
  sublabel: string;
  isCorrect: boolean;
}

interface QuestionItem {
  promptTitle: string;
  promptDisplay: string;
  promptSub: string;
  correctAnswerText: string;
  audioText: string;
  audioLang: 'gu' | 'hi';
  acceptedAnswers: string[];
  options?: QuizOption[];
}

interface AttemptReview {
  question: string;
  userAns: string;
  correctAns: string;
  isCorrect: boolean;
}

const TOTAL_QUESTIONS = 10;

const buildQuestion = (
  category: 'numbers' | 'months',
  lang: 'gu' | 'hi',
  level: 'easy' | 'medium' | 'hard' | 'listening'
): QuestionItem => {
  if (category === 'months') {
    const monthPool = lang === 'gu' ? gujaratiMonths : hindiMonths;
    const target = monthPool[Math.floor(Math.random() * monthPool.length)];

    const accepted = [
      target.english,
      target.native,
      target.transliteration,
      target.order.toString(),
      ...(target.phonetics || []),
    ];

    let opts: QuizOption[] = [];
    if (level === 'easy' || level === 'listening') {
      const distractors = monthPool.filter((m) => m.id !== target.id);
      const shuffled = distractors.sort(() => Math.random() - 0.5).slice(0, 3);
      const rawOptions = [target, ...shuffled].sort(() => Math.random() - 0.5);

      opts = rawOptions.map((item) => ({
        id: item.id,
        label: item.native,
        sublabel: `${item.transliteration} (${item.english})`,
        isCorrect: item.id === target.id,
      }));
    }

    return {
      promptTitle: `Traditional Month #${target.order}`,
      promptDisplay: target.english,
      promptSub: `Gregorian: ${target.gregorian} • ${target.season}`,
      correctAnswerText: `${target.native} (${target.transliteration})`,
      audioText: target.native,
      audioLang: lang,
      acceptedAnswers: accepted,
      options: opts,
    };
  } else {
    // Numbers 1-100
    const target = numbersData[Math.floor(Math.random() * numbersData.length)];
    const nativeWord = lang === 'gu' ? target.gujaratiName : target.hindiName;
    const nativeDigit = lang === 'gu' ? target.gujarati : target.hindi;
    const translit = lang === 'gu' ? target.gujaratiTranslit : target.hindiTranslit;
    const phonetics = lang === 'gu' ? target.phonetics.gu : target.phonetics.hi;

    const accepted = [
      target.english.toString(),
      nativeDigit,
      nativeWord,
      translit,
      ...phonetics,
    ];

    let opts: QuizOption[] = [];
    if (level === 'easy' || level === 'listening') {
      const distractors: NumberItem[] = [];
      while (distractors.length < 3) {
        const fake = numbersData[Math.floor(Math.random() * numbersData.length)];
        if (fake.english !== target.english && !distractors.find((d) => d.english === fake.english)) {
          distractors.push(fake);
        }
      }
      const rawOptions = [target, ...distractors].sort(() => Math.random() - 0.5);
      opts = rawOptions.map((num) => ({
        id: num.english,
        label: lang === 'gu' ? num.gujaratiName : num.hindiName,
        sublabel: `${lang === 'gu' ? num.gujaratiTranslit : num.hindiTranslit} • ${lang === 'gu' ? num.gujarati : num.hindi}`,
        isCorrect: num.english === target.english,
      }));
    }

    return {
      promptTitle: `Number #${target.english}`,
      promptDisplay: target.english.toString(),
      promptSub: `What is the ${lang === 'gu' ? 'Gujarati' : 'Hindi'} word?`,
      correctAnswerText: `${nativeWord} (${translit} / ${nativeDigit})`,
      audioText: nativeWord,
      audioLang: lang,
      acceptedAnswers: accepted,
      options: opts,
    };
  }
};

const PracticeSession = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { updateScore, recordAttempt, audioSpeed } = useStore();

  const category = (params.category === 'months' || params.category === 'numbers')
    ? params.category
    : 'numbers';

  const lang = (params.lang === 'hi' || params.category === 'hi') ? 'hi' : 'gu';
  const level = (params.level || 'easy') as 'easy' | 'medium' | 'hard' | 'listening';

  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionItem>(() =>
    buildQuestion(category, lang, level)
  );
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [isListening, setIsListening] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionStreak, setSessionStreak] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [reviewList, setReviewList] = useState<AttemptReview[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  const nextQuestion = useCallback(() => {
    if (questionIndex >= TOTAL_QUESTIONS - 1) {
      setIsComplete(true);
      playSound('complete');
      return;
    }

    setFeedback('idle');
    setUserInput('');
    setShowHint(false);
    setSpeechError(null);
    setQuestionIndex((prev) => prev + 1);

    const q = buildQuestion(category, lang, level);
    setCurrentQuestion(q);

    if (level === 'listening') {
      setTimeout(() => {
        speakText(q.audioText, q.audioLang, audioSpeed);
      }, 300);
    }

    if (level === 'medium') {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [questionIndex, category, lang, level, audioSpeed]);

  // Play initial audio for listening quiz on mount
  useEffect(() => {
    if (level === 'listening' && currentQuestion) {
      const timer = setTimeout(() => {
        speakText(currentQuestion.audioText, currentQuestion.audioLang, audioSpeed);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [level, currentQuestion, audioSpeed]);

  const handleAnswerSubmit = (submittedValue: string, isFromOptionClick = false, optionIsCorrect?: boolean) => {
    if (feedback !== 'idle' || !currentQuestion) return;

    let correct = false;

    if (isFromOptionClick) {
      correct = !!optionIsCorrect;
    } else {
      correct = checkAnswerMatch(submittedValue, currentQuestion.acceptedAnswers);
    }

    if (correct) {
      playSound('correct');
      setFeedback('correct');
      const basePoints = level === 'easy' ? 10 : level === 'medium' ? 20 : level === 'hard' ? 30 : 15;
      const streakBonus = Math.min(sessionStreak * 2, 20);
      const pointsWon = basePoints + streakBonus;

      setSessionScore((s) => s + pointsWon);
      setSessionStreak((str) => str + 1);
      updateScore(level === 'listening' ? 'easy' : level, pointsWon);
      recordAttempt(true);
    } else {
      playSound('incorrect');
      setFeedback('incorrect');
      setSessionStreak(0);
      recordAttempt(false);
    }

    setReviewList((prev) => [
      ...prev,
      {
        question: currentQuestion.promptDisplay,
        userAns: submittedValue || '(No answer)',
        correctAns: currentQuestion.correctAnswerText,
        isCorrect: correct,
      },
    ]);
  };

  const handlePlayPromptAudio = () => {
    if (!currentQuestion) return;
    playSound('click');
    speakText(currentQuestion.audioText, currentQuestion.audioLang, audioSpeed);
  };

  const toggleSpeechRecognition = () => {
    setSpeechError(null);
    const SpeechRecognitionClass =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      setSpeechError(
        "Speech recognition is not supported in this browser. Please use Chrome/Edge or type your answer below."
      );
      return;
    }

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognitionClass();
      recognitionRef.current = recognition;
      recognition.lang = lang === 'gu' ? 'gu-IN' : 'hi-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;

      recognition.onstart = () => {
        setIsListening(true);
        setSpeechError(null);
      };

      recognition.onspeechend = () => {
        recognition.stop();
        setIsListening(false);
      };

      recognition.onerror = (e: any) => {
        setIsListening(false);
        setSpeechError(
          e.error === 'not-allowed'
            ? 'Microphone permission was denied. Please allow microphone access.'
            : 'Could not capture audio clearly. Please try again or type below.'
        );
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setUserInput(transcript);
        handleAnswerSubmit(transcript);
      };

      recognition.start();
    } catch {
      setIsListening(false);
      setSpeechError('Could not start microphone service.');
    }
  };

  const restartQuiz = () => {
    playSound('click');
    setQuestionIndex(0);
    setSessionScore(0);
    setSessionStreak(0);
    setIsComplete(false);
    setReviewList([]);
    setFeedback('idle');
    setUserInput('');
    setShowHint(false);
    setSpeechError(null);

    const q = buildQuestion(category, lang, level);
    setCurrentQuestion(q);
  };

  if (!currentQuestion) {
    return <div className="p-12 text-center text-slate-500 font-bold">Loading questions...</div>;
  }

  // Round Complete Modal
  if (isComplete) {
    const correctCount = reviewList.filter((r) => r.isCorrect).length;
    const accuracyPercent = Math.round((correctCount / TOTAL_QUESTIONS) * 100);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 text-center space-y-6"
      >
        <div className="w-20 h-20 mx-auto bg-amber-100 text-amber-600 rounded-3xl flex items-center justify-center shadow-lg">
          <Trophy size={44} className="animate-bounce" />
        </div>

        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Round Complete!</h2>
          <p className="text-slate-500 text-sm mt-1">
            Excellent effort on {lang === 'gu' ? 'Gujarati' : 'Hindi'} {category} practice.
          </p>
        </div>

        {/* Stats summary row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-xs text-slate-400 font-semibold block">Score</span>
            <span className="text-2xl font-black text-indigo-600">+{sessionScore}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-xs text-slate-400 font-semibold block">Correct</span>
            <span className="text-2xl font-black text-emerald-600">
              {correctCount} / {TOTAL_QUESTIONS}
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-xs text-slate-400 font-semibold block">Accuracy</span>
            <span className="text-2xl font-black text-amber-600">{accuracyPercent}%</span>
          </div>
        </div>

        {/* Review list */}
        <div className="text-left">
          <h3 className="text-sm font-bold text-slate-700 mb-2 flex items-center gap-1.5">
            <Award size={16} className="text-indigo-600" />
            <span>Question Review</span>
          </h3>
          <div className="max-h-48 overflow-y-auto space-y-2 pr-1 text-xs">
            {reviewList.map((rev, i) => (
              <div
                key={i}
                className={`p-2.5 rounded-xl border flex items-center justify-between ${
                  rev.isCorrect
                    ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                    : 'bg-red-50/70 border-red-200 text-red-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  {rev.isCorrect ? (
                    <Check size={16} className="text-emerald-600 font-bold" />
                  ) : (
                    <X size={16} className="text-red-500 font-bold" />
                  )}
                  <div>
                    <span className="font-bold">{rev.question}</span> → <span>{rev.correctAns}</span>
                  </div>
                </div>
                {!rev.isCorrect && (
                  <span className="text-[10px] text-red-500 italic">You said: {rev.userAns}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={restartQuiz}
            className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-md transition flex items-center justify-center gap-2 text-sm"
          >
            <RotateCcw size={16} /> Play Again
          </button>
          <button
            onClick={() => navigate('/practice')}
            className="py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition text-sm"
          >
            Practice Menu
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Header bar */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-indigo-600">
            {lang === 'gu' ? 'Gujarati' : 'Hindi'} • {category} • {level}
          </span>
          <h2 className="text-xl font-black text-slate-800">
            Question {questionIndex + 1} of {TOTAL_QUESTIONS}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          {sessionStreak > 1 && (
            <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-600 px-2.5 py-1 rounded-full text-xs font-bold animate-pulse">
              <Flame size={14} className="fill-amber-500 text-amber-500" />
              <span>{sessionStreak} Streak!</span>
            </div>
          )}
          <span className="text-xs font-bold bg-slate-100 px-3 py-1.5 rounded-xl text-slate-700">
            Score: <strong>{sessionScore}</strong>
          </span>
          <button
            onClick={() => navigate('/practice')}
            className="text-xs font-bold text-slate-400 hover:text-slate-600"
          >
            Exit
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-indigo-600 h-full rounded-full transition-all duration-300"
          style={{ width: `${((questionIndex + 1) / TOTAL_QUESTIONS) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <motion.div
        key={questionIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 text-center"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
          {currentQuestion.promptTitle}
        </p>

        {level === 'listening' ? (
          <div className="my-6">
            <button
              onClick={handlePlayPromptAudio}
              className="p-6 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 shadow-md hover:scale-105 transition inline-flex items-center justify-center gap-2"
            >
              <Headphones size={36} />
            </button>
            <p className="text-sm font-semibold text-slate-600 mt-3">Click to replay native audio</p>
          </div>
        ) : (
          <h1 className="text-5xl sm:text-6xl font-black text-indigo-600 my-4 tracking-tight">
            {currentQuestion.promptDisplay}
          </h1>
        )}

        <p className="text-xs sm:text-sm text-slate-500 mb-6">{currentQuestion.promptSub}</p>

        {/* Mode 1: Multiple Choice (Easy & Listening) */}
        {(level === 'easy' || level === 'listening') && currentQuestion.options && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentQuestion.options.map((opt) => {
              let optStyle = 'border-slate-200/90 hover:border-indigo-400 hover:bg-indigo-50/50';
              if (feedback !== 'idle') {
                if (opt.isCorrect) {
                  optStyle = 'border-emerald-400 bg-emerald-50 text-emerald-900 font-bold';
                } else {
                  optStyle = 'border-slate-100 opacity-40 bg-slate-50';
                }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleAnswerSubmit(opt.label, true, opt.isCorrect)}
                  disabled={feedback !== 'idle'}
                  className={`p-4 border-2 rounded-2xl text-left transition-all flex flex-col justify-between ${optStyle}`}
                >
                  <span className="text-xl font-black text-slate-800">{opt.label}</span>
                  <span className="text-xs text-slate-500 mt-1">{opt.sublabel}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Mode 2: Intermediate Typing */}
        {level === 'medium' && (
          <div className="space-y-4 max-w-md mx-auto">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                disabled={feedback !== 'idle'}
                placeholder={`Type in ${lang === 'gu' ? 'Gujarati' : 'Hindi'} or English sound...`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && userInput.trim() && feedback === 'idle') {
                    handleAnswerSubmit(userInput);
                  }
                }}
                className="w-full text-center text-xl font-bold p-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <button
                type="button"
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-1 text-indigo-600 hover:underline font-semibold"
              >
                <HelpCircle size={14} />
                <span>{showHint ? 'Hide Hint' : 'Need a hint?'}</span>
              </button>
              <span>Press Enter to Submit</span>
            </div>

            {showHint && (
              <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-xs text-amber-800 font-medium text-left">
                💡 Starts with: <strong>{currentQuestion.correctAnswerText.slice(0, 3)}...</strong> (or type the number digit)
              </div>
            )}

            <button
              onClick={() => handleAnswerSubmit(userInput)}
              disabled={feedback !== 'idle' || !userInput.trim()}
              className="w-full bg-indigo-600 text-white p-3.5 rounded-2xl font-bold hover:bg-indigo-700 transition disabled:opacity-40 shadow-sm"
            >
              Check Answer
            </button>
          </div>
        )}

        {/* Mode 3: Hard Speaking */}
        {level === 'hard' && (
          <div className="space-y-5 max-w-md mx-auto">
            <div className="flex justify-center">
              <button
                onClick={toggleSpeechRecognition}
                disabled={feedback !== 'idle'}
                className={`p-8 rounded-full transition-all shadow-lg ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse ring-8 ring-red-200 scale-110'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-105'
                } disabled:opacity-50`}
              >
                <Mic size={44} />
              </button>
            </div>

            {isListening ? (
              <div className="space-y-1">
                <p className="text-sm font-bold text-red-600 animate-pulse">Listening... speak now!</p>
                <p className="text-xs text-slate-400">Say the word in {lang === 'gu' ? 'Gujarati' : 'Hindi'}</p>
              </div>
            ) : userInput ? (
              <p className="text-sm">
                Transcribed: <strong className="text-indigo-600 text-base">{userInput}</strong>
              </p>
            ) : (
              <p className="text-xs text-slate-500">Tap the mic button and speak clearly into your device.</p>
            )}

            {speechError && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 space-y-2">
                <p>{speechError}</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type answer instead..."
                    className="flex-1 px-3 py-1.5 border rounded-lg text-xs"
                  />
                  <button
                    onClick={() => handleAnswerSubmit(userInput)}
                    disabled={!userInput.trim()}
                    className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>

      {/* Answer Feedback Banner */}
      <AnimatePresence>
        {feedback !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md ${
              feedback === 'correct'
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : 'bg-red-50 border-red-300 text-red-900'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-xl ${
                  feedback === 'correct' ? 'bg-emerald-200 text-emerald-800' : 'bg-red-200 text-red-800'
                }`}
              >
                {feedback === 'correct' ? <Check size={24} /> : <X size={24} />}
              </div>
              <div>
                <p className="font-extrabold text-base">
                  {feedback === 'correct' ? 'Correct! Fantastic job!' : 'Incorrect'}
                </p>
                <p className="text-xs mt-0.5">
                  Answer: <strong>{currentQuestion.correctAnswerText}</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handlePlayPromptAudio}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
                title="Hear correct pronunciation"
              >
                <Volume2 size={18} />
              </button>
              <button
                onClick={nextQuestion}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-sm transition"
              >
                <span>{questionIndex < TOTAL_QUESTIONS - 1 ? 'Next Question' : 'View Results'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PracticeSession;
