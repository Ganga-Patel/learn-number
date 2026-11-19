# Language Learning App: Project Workflow & Architecture

This document explains the architecture, workflow, and technology choices behind the Gujarati and Hindi numbers/months learning application (**LearnGujHindi**).

---

## 1. Application Workflow (User Journey)

The web app follows a comprehensive, engaging, and progressive learning cycle:

### 1. Onboarding (`/login`)
- The user lands on the Login screen.
- They can enter their name for personalized greeting and progress tracking, or click **"Continue as Guest"**.
- Persistent profile state stored in `localStorage` through Zustand.

### 2. Dashboard (`/`)
- Displays real-time progress metrics:
  - **Numbers Learned**: Counter (X / 100) and animated progress bar.
  - **Months Learned**: Counter (X / 24) and animated progress bar.
  - **Accuracy %**: Calculated from total correct attempts vs total attempts.
  - **Total Score & Streaks**: Current streak with animated flame icon and best all-time streak.
- **Score Breakdown**: Points earned in Easy (+10), Medium (+20), and Hard (+30) modes.
- **Instant Number Lookup Widget**: Quick search to inspect and hear any number 1-100 directly from the dashboard.
- **Milestones & Achievements**: 8 unlockable badges (First Step, Double Digits, Halfway Hero, Century Club, Calendar Scholar, On Fire, Sharp Mind, Quiz Champion).

### 3. Learning Phase
- **Numbers 1 - 100 (`/learn-numbers`)**:
  - Filter numbers by range chips (`1-20`, `21-40`, `41-60`, `61-80`, `81-100`, `All`).
  - Filter by learning state (`All`, `Learned`, `To Learn`).
  - Search bar matching English digits, native script, or phonetic sound.
  - Number cards display Western numeral, native numeral (`૧`/`१`), native word (`એક`/`एक`), and Roman transliteration (`Ek`).
  - Toggle learned state on/off with visual checkmark badges.
  - "Mark Visible" / "Clear Visible" batch buttons.
  - Instant speech audio pronunciation with rate control.

- **Traditional Months (`/learn-months`)**:
  - Dual calendar support: **Gujarati (Vikram Samvat)** starting with Kartik, and **Hindi (Saka/National)** starting with Chaitra.
  - Comprehensive details for each month: native script, transliteration, approximate Gregorian span, traditional season, and major festivals.
  - Audio pronunciation and learned toggle tracking.

- **3D Flashcards (`/flashcards`)**:
  - Interactive flip cards for both Numbers and Months.
  - Front reveals English prompt; flip reveals native script, word, Romanization, and audio.
  - Keyboard navigation (Space to flip, Left/Right arrows to browse, Up arrow to listen).
  - Shuffle deck button and "Mark as Mastered" toggle.

- **Number Finder & Explorer (`/lookup`)**:
  - Interactive number converter with slider (1-100) or text search.
  - Side-by-side comparison between Gujarati and Hindi.
  - Base-10 visual counting beads representation.

### 4. Practice Arena (`/practice` & `/practice/:category/:lang/:level`)
- Select Category: **Numbers (1-100)** or **Traditional Months**.
- Select Language: **Gujarati** or **Hindi**.
- Four Practice Modes:
  1. **Easy (Multiple Choice)**: 4 options for quick recognition (+10 pts).
  2. **Intermediate (Typing Test)**: Type in native script or English Roman transliteration (+20 pts). Features tolerant fuzzy matching and hint button.
  3. **Hard (Voice Speaking)**: Speak the word aloud into microphone using browser SpeechRecognition (+30 pts).
  4. **Listening Challenge**: Hear the native audio and identify the corresponding number/month (+15 pts).
- **Session Gameplay**:
  - Structured 10-question rounds with animated progress bar.
  - Live streak multiplier bonus (+2 pts per streak).
  - Immediate audio feedback: pleasant chord chime for correct, gentle buzzer for incorrect.
  - End-of-round fanfare with complete review list of questions, answers, and accuracy.

---

## 2. Technology Stack & Why It Was Chosen

### Frontend: **React 19**
- Component-driven architecture with hooks (`useState`, `useMemo`, `useCallback`, `useRef`).
- Fast render cycles and clean state synchronization.

### Build Tool: **Vite 8**
- Ultra-fast native ESM development and sub-second production builds.
- Optimized bundle size and asset processing.

### Styling: **Tailwind CSS 3**
- Modern utility classes, responsive breakpoints (`sm:`, `md:`, `lg:`), and custom gradients.
- Typography integration with Google Fonts (`Plus Jakarta Sans`, `Noto Sans Gujarati`, `Noto Sans Devanagari`).

### State Management: **Zustand 5 with Persist**
- Global store (`useStore.ts`) managing scores, learned items, streaks, audio speed, and authentication.
- Automatically persists state in browser `localStorage`.

### Motion & Icons: **Framer Motion & Lucide React**
- Smooth 3D card flips, entry animations, layout transitions, and clean iconography.

### Audio & Voice APIs:
- **Web Speech API (`SpeechSynthesis`)**: In-browser natural pronunciation for Gujarati (`gu-IN`) and Hindi (`hi-IN`) without external cloud API latency or costs.
- **Web Speech Recognition (`SpeechRecognition`)**: Hands-free voice input transcription for the Hard difficulty mode.
- **Web Audio API (`AudioContext`)**: Custom zero-dependency synthesized chimes, clicks, and fanfares.

---

## 3. Data Structure

- **Numbers Data (`src/data/numbers.ts`)**:
  - 100 complete numbers with English numeral, Gujarati numeral, Gujarati word, Roman transliteration, Hindi numeral, Hindi word, Hindi Roman transliteration, and curated phonetic variation arrays for tolerant typing matching.
- **Months Data (`src/data/months.ts`)**:
  - 12 Gujarati months and 12 Hindi months with order, native script, Roman transliteration, Gregorian calendar range, seasons, festivals, and phonetics.
