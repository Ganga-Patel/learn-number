import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserProgress {
  numbersLearned: number[];
  monthsLearned: string[];
  scores: {
    easy: number;
    medium: number;
    hard: number;
  };
  totalAttempts: number;
  correctAttempts: number;
}

interface AppState {
  isGuest: boolean;
  username: string | null;
  progress: UserProgress;
  login: (username: string) => void;
  continueAsGuest: () => void;
  logout: () => void;
  markNumberLearned: (num: number) => void;
  markMonthLearned: (month: string) => void;
  updateScore: (level: 'easy' | 'medium' | 'hard', score: number) => void;
  recordAttempt: (isCorrect: boolean) => void;
}

const initialProgress: UserProgress = {
  numbersLearned: [],
  monthsLearned: [],
  scores: {
    easy: 0,
    medium: 0,
    hard: 0,
  },
  totalAttempts: 0,
  correctAttempts: 0,
};

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      isGuest: false,
      username: null,
      progress: initialProgress,
      login: (username) => set({ isGuest: false, username }),
      continueAsGuest: () => set({ isGuest: true, username: 'Guest' }),
      logout: () => set({ isGuest: false, username: null, progress: initialProgress }),
      markNumberLearned: (num) =>
        set((state) => ({
          progress: {
            ...state.progress,
            numbersLearned: state.progress.numbersLearned.includes(num)
              ? state.progress.numbersLearned
              : [...state.progress.numbersLearned, num],
          },
        })),
      markMonthLearned: (month) =>
        set((state) => ({
          progress: {
            ...state.progress,
            monthsLearned: state.progress.monthsLearned.includes(month)
              ? state.progress.monthsLearned
              : [...state.progress.monthsLearned, month],
          },
        })),
      updateScore: (level, score) =>
        set((state) => ({
          progress: {
            ...state.progress,
            scores: {
              ...state.progress.scores,
              [level]: state.progress.scores[level] + score,
            },
          },
        })),
      recordAttempt: (isCorrect) =>
        set((state) => ({
          progress: {
            ...state.progress,
            totalAttempts: state.progress.totalAttempts + 1,
            correctAttempts: state.progress.correctAttempts + (isCorrect ? 1 : 0),
          },
        })),
    }),
    {
      name: 'learn-numbers-storage',
    }
  )
);
