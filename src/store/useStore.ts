import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserProgress {
  numbersLearned: number[];
  monthsLearned: string[];
  scores: {
    easy: number;
    medium: number;
    hard: number;
  };
  totalAttempts: number;
  correctAttempts: number;
  streak: number;
  bestStreak: number;
}

export interface AppState {
  isGuest: boolean;
  username: string | null;
  audioSpeed: number;
  progress: UserProgress;
  login: (username: string) => void;
  continueAsGuest: () => void;
  logout: () => void;
  setAudioSpeed: (speed: number) => void;
  toggleNumberLearned: (num: number) => void;
  markNumberLearned: (num: number) => void;
  toggleMonthLearned: (monthId: string) => void;
  markMonthLearned: (monthId: string) => void;
  updateScore: (level: 'easy' | 'medium' | 'hard', score: number) => void;
  recordAttempt: (isCorrect: boolean) => void;
  resetProgress: () => void;
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
  streak: 0,
  bestStreak: 0,
};

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      isGuest: false,
      username: null,
      audioSpeed: 0.9,
      progress: initialProgress,

      login: (username) => set({ isGuest: false, username }),
      continueAsGuest: () => set({ isGuest: true, username: 'Guest' }),
      logout: () => set({ isGuest: false, username: null }),

      setAudioSpeed: (speed) => set({ audioSpeed: speed }),

      toggleNumberLearned: (num) =>
        set((state) => {
          const exists = state.progress.numbersLearned.includes(num);
          const nextNumbers = exists
            ? state.progress.numbersLearned.filter((n) => n !== num)
            : [...state.progress.numbersLearned, num];
          return {
            progress: {
              ...state.progress,
              numbersLearned: nextNumbers,
            },
          };
        }),

      markNumberLearned: (num) =>
        set((state) => ({
          progress: {
            ...state.progress,
            numbersLearned: state.progress.numbersLearned.includes(num)
              ? state.progress.numbersLearned
              : [...state.progress.numbersLearned, num],
          },
        })),

      toggleMonthLearned: (monthId) =>
        set((state) => {
          const exists = state.progress.monthsLearned.includes(monthId);
          const nextMonths = exists
            ? state.progress.monthsLearned.filter((m) => m !== monthId)
            : [...state.progress.monthsLearned, monthId];
          return {
            progress: {
              ...state.progress,
              monthsLearned: nextMonths,
            },
          };
        }),

      markMonthLearned: (monthId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            monthsLearned: state.progress.monthsLearned.includes(monthId)
              ? state.progress.monthsLearned
              : [...state.progress.monthsLearned, monthId],
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
        set((state) => {
          const currentStreak = isCorrect ? state.progress.streak + 1 : 0;
          const bestStreak = Math.max(state.progress.bestStreak || 0, currentStreak);
          return {
            progress: {
              ...state.progress,
              totalAttempts: state.progress.totalAttempts + 1,
              correctAttempts: state.progress.correctAttempts + (isCorrect ? 1 : 0),
              streak: currentStreak,
              bestStreak,
            },
          };
        }),

      resetProgress: () =>
        set({
          progress: initialProgress,
        }),
    }),
    {
      name: 'learn-numbers-storage',
    }
  )
);
