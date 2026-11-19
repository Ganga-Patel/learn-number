import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { hashPassword } from '../utils/auth';

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

export interface UserAccount {
  username: string;
  displayName: string;
  passwordHash: string;
  createdAt: string;
  progress: UserProgress;
}

export interface AppState {
  currentUser: string | null;
  username: string | null;
  users: Record<string, UserAccount>;
  audioSpeed: number;
  progress: UserProgress;

  login: (username: string, password: string) => { success: boolean; error?: string };
  register: (username: string, password: string, displayName?: string) => { success: boolean; error?: string };
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

const defaultAccounts: Record<string, UserAccount> = {
  student: {
    username: 'student',
    displayName: 'Student Learner',
    passwordHash: hashPassword('password123'),
    createdAt: new Date().toISOString(),
    progress: initialProgress,
  },
  admin: {
    username: 'admin',
    displayName: 'Admin Master',
    passwordHash: hashPassword('admin123'),
    createdAt: new Date().toISOString(),
    progress: initialProgress,
  },
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      currentUser: null,
      username: null,
      users: defaultAccounts,
      audioSpeed: 0.9,
      progress: initialProgress,

      login: (rawUsername: string, rawPassword: string) => {
        const username = rawUsername.trim().toLowerCase();
        const password = rawPassword.trim();

        if (!username) {
          return { success: false, error: 'Please enter your username.' };
        }
        if (!password) {
          return { success: false, error: 'Please enter your password.' };
        }

        const state = get();
        // Ensure default accounts exist in state
        const currentUsers = { ...defaultAccounts, ...state.users };
        const user = currentUsers[username];

        if (!user) {
          return {
            success: false,
            error: `User "${rawUsername.trim()}" not found. Please check your username or create an account.`,
          };
        }

        const incomingHash = hashPassword(password);
        if (user.passwordHash !== incomingHash) {
          return {
            success: false,
            error: 'Incorrect password! Access denied. Please try again.',
          };
        }

        // Successfully authenticated
        set({
          currentUser: user.username,
          username: user.displayName || user.username,
          progress: user.progress || initialProgress,
          users: currentUsers,
        });

        return { success: true };
      },

      register: (rawUsername: string, rawPassword: string, rawDisplayName?: string) => {
        const username = rawUsername.trim().toLowerCase();
        const password = rawPassword.trim();
        const displayName = rawDisplayName?.trim() || rawUsername.trim();

        if (!username || username.length < 3) {
          return { success: false, error: 'Username must be at least 3 characters long.' };
        }
        if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
          return { success: false, error: 'Username can only contain letters, numbers, and underscores.' };
        }
        if (!password || password.length < 4) {
          return { success: false, error: 'Password must be at least 4 characters long.' };
        }

        const state = get();
        const currentUsers = { ...defaultAccounts, ...state.users };

        if (currentUsers[username]) {
          return {
            success: false,
            error: `Username "${username}" is already taken. Please choose a different one or sign in.`,
          };
        }

        const newUser: UserAccount = {
          username,
          displayName,
          passwordHash: hashPassword(password),
          createdAt: new Date().toISOString(),
          progress: initialProgress,
        };

        const updatedUsers = {
          ...currentUsers,
          [username]: newUser,
        };

        // Auto login on successful registration
        set({
          users: updatedUsers,
          currentUser: username,
          username: displayName,
          progress: initialProgress,
        });

        return { success: true };
      },

      logout: () => {
        const state = get();
        if (state.currentUser && state.users[state.currentUser]) {
          // Save current progress back to user profile
          const updatedUsers = {
            ...state.users,
            [state.currentUser]: {
              ...state.users[state.currentUser],
              progress: state.progress,
            },
          };
          set({
            currentUser: null,
            username: null,
            progress: initialProgress,
            users: updatedUsers,
          });
        } else {
          set({
            currentUser: null,
            username: null,
            progress: initialProgress,
          });
        }
      },

      setAudioSpeed: (speed) => set({ audioSpeed: speed }),

      toggleNumberLearned: (num) =>
        set((state) => {
          const exists = state.progress.numbersLearned.includes(num);
          const nextNumbers = exists
            ? state.progress.numbersLearned.filter((n) => n !== num)
            : [...state.progress.numbersLearned, num];
          const newProgress = {
            ...state.progress,
            numbersLearned: nextNumbers,
          };

          const updatedUsers = state.currentUser && state.users[state.currentUser]
            ? {
                ...state.users,
                [state.currentUser]: {
                  ...state.users[state.currentUser],
                  progress: newProgress,
                },
              }
            : state.users;

          return {
            progress: newProgress,
            users: updatedUsers,
          };
        }),

      markNumberLearned: (num) =>
        set((state) => {
          const nextNumbers = state.progress.numbersLearned.includes(num)
            ? state.progress.numbersLearned
            : [...state.progress.numbersLearned, num];
          const newProgress = {
            ...state.progress,
            numbersLearned: nextNumbers,
          };

          const updatedUsers = state.currentUser && state.users[state.currentUser]
            ? {
                ...state.users,
                [state.currentUser]: {
                  ...state.users[state.currentUser],
                  progress: newProgress,
                },
              }
            : state.users;

          return {
            progress: newProgress,
            users: updatedUsers,
          };
        }),

      toggleMonthLearned: (monthId) =>
        set((state) => {
          const exists = state.progress.monthsLearned.includes(monthId);
          const nextMonths = exists
            ? state.progress.monthsLearned.filter((m) => m !== monthId)
            : [...state.progress.monthsLearned, monthId];
          const newProgress = {
            ...state.progress,
            monthsLearned: nextMonths,
          };

          const updatedUsers = state.currentUser && state.users[state.currentUser]
            ? {
                ...state.users,
                [state.currentUser]: {
                  ...state.users[state.currentUser],
                  progress: newProgress,
                },
              }
            : state.users;

          return {
            progress: newProgress,
            users: updatedUsers,
          };
        }),

      markMonthLearned: (monthId) =>
        set((state) => {
          const nextMonths = state.progress.monthsLearned.includes(monthId)
            ? state.progress.monthsLearned
            : [...state.progress.monthsLearned, monthId];
          const newProgress = {
            ...state.progress,
            monthsLearned: nextMonths,
          };

          const updatedUsers = state.currentUser && state.users[state.currentUser]
            ? {
                ...state.users,
                [state.currentUser]: {
                  ...state.users[state.currentUser],
                  progress: newProgress,
                },
              }
            : state.users;

          return {
            progress: newProgress,
            users: updatedUsers,
          };
        }),

      updateScore: (level, score) =>
        set((state) => {
          const newProgress = {
            ...state.progress,
            scores: {
              ...state.progress.scores,
              [level]: state.progress.scores[level] + score,
            },
          };

          const updatedUsers = state.currentUser && state.users[state.currentUser]
            ? {
                ...state.users,
                [state.currentUser]: {
                  ...state.users[state.currentUser],
                  progress: newProgress,
                },
              }
            : state.users;

          return {
            progress: newProgress,
            users: updatedUsers,
          };
        }),

      recordAttempt: (isCorrect) =>
        set((state) => {
          const currentStreak = isCorrect ? state.progress.streak + 1 : 0;
          const bestStreak = Math.max(state.progress.bestStreak || 0, currentStreak);
          const newProgress = {
            ...state.progress,
            totalAttempts: state.progress.totalAttempts + 1,
            correctAttempts: state.progress.correctAttempts + (isCorrect ? 1 : 0),
            streak: currentStreak,
            bestStreak,
          };

          const updatedUsers = state.currentUser && state.users[state.currentUser]
            ? {
                ...state.users,
                [state.currentUser]: {
                  ...state.users[state.currentUser],
                  progress: newProgress,
                },
              }
            : state.users;

          return {
            progress: newProgress,
            users: updatedUsers,
          };
        }),

      resetProgress: () =>
        set((state) => {
          const updatedUsers = state.currentUser && state.users[state.currentUser]
            ? {
                ...state.users,
                [state.currentUser]: {
                  ...state.users[state.currentUser],
                  progress: initialProgress,
                },
              }
            : state.users;

          return {
            progress: initialProgress,
            users: updatedUsers,
          };
        }),
    }),
    {
      name: 'learn-numbers-auth-storage',
    }
  )
);
