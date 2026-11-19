# LearnIndic: 12 Major Indian Languages Learning App

An interactive, engaging web application designed to help learners of all ages master **Numbers (1 to 100)** and **Traditional Lunar & Solar Months** across **12 Major Indian Languages**.

![React](https://img.shields.io/badge/React-19-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)
![Vite](https://img.shields.io/badge/Vite-8-purple.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8.svg)
![Zustand](https://img.shields.io/badge/Zustand-5-orange.svg)

---

## 🇮🇳 Supported Indian Languages (12 Languages)

| Language | Native Name | Script | Family | Speech Code |
|---|---|---|---|---|
| **Hindi** | हिन्दी | Devanagari | Indo-Aryan | `hi-IN` |
| **Gujarati** | ગુજરાતી | Gujarati | Indo-Aryan | `gu-IN` |
| **Marathi** | मराठी | Devanagari | Indo-Aryan | `mr-IN` |
| **Bengali** | বাংলা | Bengali | Indo-Aryan | `bn-IN` |
| **Tamil** | தமிழ் | Tamil | Dravidian | `ta-IN` |
| **Telugu** | తెలుగు | Telugu | Dravidian | `te-IN` |
| **Kannada** | ಕನ್ನಡ | Kannada | Dravidian | `kn-IN` |
| **Malayalam** | മലയാളം | Malayalam | Dravidian | `ml-IN` |
| **Punjabi** | ਪੰਜਾਬੀ | Gurmukhi | Indo-Aryan | `pa-IN` |
| **Odia** | ଓଡ଼ିଆ | Odia | Indo-Aryan | `or-IN` |
| **Sanskrit** | संस्कृतम् | Devanagari | Indo-Aryan | `hi-IN` |
| **Urdu** | اردو | Perso-Arabic | Indo-Aryan | `ur-IN` |

---

## 🌟 Key Features

### 🔢 Numbers (1 - 100) Across All 12 Languages
- Complete database for all 100 numbers in 12 Indian languages with authentic native numerals (e.g. `૧`, `१`, `১`, `௧`, `౧`, `೧`, `൧`, `੧`, `୧`, `۱`).
- **Roman Transliterations**: Clear phonetic pronunciation guides for every language.
- **Audio Pronunciation**: High-clarity native speech with configurable speed (`0.9x` normal / `0.75x` slow).
- **Smart Filtering**: Range chips (`1-20`, `21-40`, etc.), learning status (`Learned` / `To Learn`), and instant multi-lingual search.
- **Batch Controls**: Mark or clear visible numbers as learned in one click.

### 🗓️ Traditional Months (8 Regional Calendar Traditions)
- **Gujarati (Vikram Samvat)**: 12 months starting with *Kartik*.
- **Hindi / National (Chaitradi)**: 12 months starting with *Chaitra*.
- **Marathi (Shalivahana Shaka)**: 12 months starting with *Chaitra*.
- **Tamil (Souramana Solar)**: 12 months starting with *Chithirai*.
- **Bengali (Bangla Sal)**: 12 months starting with *Boishakh*.
- **Telugu (Chandramana)**: 12 months starting with *Chaitramu*.
- **Kannada (Chandramana)**: 12 months starting with *Chaitra*.
- **Malayalam (Kollam Era)**: 12 months starting with *Chingam*.
- Complete seasonal and festival metadata for each calendar.

### 🃏 3D Interactive Flashcards
- Flip cards with 3D animations for memory practice in any Indian language.
- Full keyboard support:
  - `Space` / `Enter`: Flip card
  - `←` / `→`: Navigate previous / next card
  - `↑` / `V`: Listen to audio pronunciation
- Deck shuffling and "Mark as Mastered" tracking.

### 🔍 Pan-Indian Number Finder & Explorer
- Instant number converter with interactive slider (1-100) and text search.
- **12-Language Comparison Matrix**: Compare any number across all 12 languages simultaneously with instant pronunciation audio buttons!
- Base-10 visual counting beads representation.

### 🎯 Gamified Practice Arena
- **Four Game Modes for Any Language**:
  1. **Easy (Multiple Choice)**: 4 options to test visual recognition (+10 pts).
  2. **Intermediate (Typing)**: Type native script or Roman transliteration with fuzzy phonetic validation (+20 pts).
  3. **Hard (Voice Speaking)**: Speak the answer aloud using browser SpeechRecognition (+30 pts).
  4. **Listening Challenge**: Listen to native speech and pick the matching answer (+15 pts).
- **10-Question Structured Rounds**: Streak multipliers (+2 pts per streak 🔥), Web Audio sound effects (chimes & buzzers), and comprehensive round-end review list.

### 🔐 Password-Protected Authentication
- Strict password validation.
- User registration with name, username, and password.
- Pre-configured demo accounts (`student` / `password123`, `admin` / `admin123`).
- Per-user progress isolation.

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
