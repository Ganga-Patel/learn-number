# LearnGujHindi: Gujarati & Hindi Numbers and Months Learning App

An interactive, engaging web application designed to help learners of all ages master **Numbers (1 to 100)** and **Traditional Lunar Months** in **Gujarati** and **Hindi**.

![React](https://img.shields.io/badge/React-19-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)
![Vite](https://img.shields.io/badge/Vite-8-purple.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8.svg)
![Zustand](https://img.shields.io/badge/Zustand-5-orange.svg)

---

## 🌟 Key Features

### 🔢 Numbers (1 - 100)
- Full 1 to 100 number database for both Gujarati (`૧` - `૧૦૦`) and Hindi (`१` - `१००`).
- **Roman Transliterations**: Learn how to pronounce each number (e.g. *Ek*, *Tran*, *Chhoter*, *Ninyaanve*).
- **Audio Pronunciation**: High-clarity native speech with configurable speed (Normal `0.9x` / Slow `0.75x`).
- **Smart Filtering**: Filter by range (`1-20`, `21-40`, etc.), learning status (`Learned` / `To Learn`), or instant search.
- **Batch Controls**: Mark or clear visible numbers as learned with one click.

### 🗓️ Traditional Months
- **Gujarati Months (Vikram Samvat)**: 12 months starting with *Kartik* (post-Diwali).
- **Hindi Months (Saka / National)**: 12 months starting with *Chaitra* (Spring).
- Detailed metadata including approximate Gregorian calendar months, traditional seasons, and celebrated festivals.

### 🃏 3D Flashcards
- Flip cards with smooth 3D animations for memory practice.
- Full keyboard support:
  - `Space` / `Enter`: Flip card
  - `←` / `→`: Navigate previous / next card
  - `↑` / `V`: Listen to audio pronunciation
- Deck shuffling and "Mark as Mastered" tracking.

### 🔍 Number Finder & Explorer
- Instant number converter with interactive slider (1-100) and text search.
- Dual-column comparison between Gujarati and Hindi.
- Visual base-10 counting beads representation.

### 🎯 Gamified Practice Arena
- **Four Game Modes**:
  1. **Easy (Multiple Choice)**: 4 options to test visual recognition (+10 pts).
  2. **Intermediate (Typing)**: Type native script or Roman transliteration with fuzzy phonetic validation (+20 pts).
  3. **Hard (Voice Speaking)**: Speak the answer aloud using browser SpeechRecognition (+30 pts).
  4. **Listening Challenge**: Listen to native speech and pick the matching answer (+15 pts).
- **10-Question Rounds**: Streak multiplier bonuses, Web Audio sound effects (chimes & buzzers), and comprehensive round-end review list.

### 📊 Dashboard & Achievements
- Track total numbers and months mastered with live progress bars.
- Accuracy percentage and current/best streak tracking.
- **8 Unlockable Achievement Badges** to keep learners motivated.
- Persistent state via browser `localStorage`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Navigate to the app directory:
   ```bash
   cd app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Run linting:
   ```bash
   npm run lint
   ```

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS 3
- **State Management**: Zustand 5 (`persist` middleware)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Sound**: Web Audio API (Synthesized chimes) & Web Speech API (TTS & Speech-to-Text)

---

## 📄 License
MIT License. Feel free to use and expand!
