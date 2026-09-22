# Language Learning App: Project Workflow & Architecture

This document explains the architecture, workflow, and technology choices behind the Gujarati and Hindi numbers/months learning application.

## 1. Application Workflow (User Journey)

The web app follows a simple, engaging, and progressive learning cycle:

1. **Onboarding (Login/Guest Mode)**
   - The user lands on the Login screen (`/login`).
   - They can either enter their name to "Login" or click "Continue as Guest".
   - **Why?** Reduces friction for new users while allowing returning users to have a personalized experience.

2. **Dashboard (`/`)**
   - After onboarding, the user is redirected to the Dashboard.
   - Here, they see their overall progress: numbers learned, months learned, total score, and accuracy.
   - **Why?** Gamification elements like scores and accuracy keep the user motivated to practice more.

3. **Learning Phase (`/learn-numbers` & `/learn-months`)**
   - The user explores the numbers (1-100) or months.
   - A toggle lets them isolate **Gujarati** or **Hindi** so they can focus on one language at a time.
   - Clicking a number marks it as "learned" (tracked in state).
   - Clicking the "Listen" button triggers the native browser text-to-speech to pronounce the word.

4. **Practice Phase (`/practice`)**
   - The user selects a language (Gujarati or Hindi) and a difficulty level:
     - **Easy:** A target number is shown in English. The user selects the correct translation from 4 randomized options.
     - **Intermediate:** The user must manually type the correct word in the target language (Unicode).
     - **Hard:** The user taps a microphone button and physically speaks the word. The app listens, transcribes it, and verifies the answer.
   - Every attempt updates the user's accuracy and score in the dashboard.

---

## 2. Technology Stack & Why It Was Chosen

### Frontend Framework: **React 19**
- **What it is:** A JavaScript library for building user interfaces.
- **Why we used it:** React's component-based architecture makes it incredibly easy to manage complex UI states (like switching between practice questions, managing tabs, and updating dashboard numbers instantly).

### Build Tool: **Vite**
- **What it is:** A modern frontend build tool.
- **Why we used it:** It is significantly faster than Create React App (CRA), offering instant server starts and lightning-fast Hot Module Replacement (HMR) during development.

### Styling: **Tailwind CSS**
- **What it is:** A utility-first CSS framework.
- **Why we used it:** Instead of writing hundreds of lines of separate CSS, Tailwind allows us to style components directly in the HTML/JSX. It enabled us to build a modern, responsive, and clean UI in record time.

### Routing: **React Router DOM**
- **What it is:** The standard routing library for React.
- **Why we used it:** It allows us to create a Single Page Application (SPA). Moving from the Dashboard to the Practice screen happens instantly without reloading the browser page.

### State Management: **Zustand**
- **What it is:** A small, fast, and scalable state-management solution for React.
- **Why we used it:** We needed a way to remember user scores, name, and learned numbers across different pages. Instead of passing props down a massive component tree or using complex Redux boilerplates, Zustand provides a clean, simple store (`useStore.ts`). 
- *Bonus:* We utilized Zustand's `persist` middleware, which automatically saves the user's progress to the browser's `localStorage`. This is why progress is saved even if the user refreshes or closes the tab.

### Icons & Animations: **Lucide React & Framer Motion**
- **What they are:** A beautiful icon library and an animation library.
- **Why we used them:** Framer Motion provides the smooth hovering and page-load animations. Lucide provides the lightweight, clean SVG icons used in the dashboard and buttons to make the UI look professional.

### Web APIs: **Web Speech API**
- **What it is:** A native browser API for speech recognition (Speech-to-Text) and speech synthesis (Text-to-Speech).
- **Why we used it:** Instead of paying for expensive cloud AI voice services, we utilized the browser's built-in capabilities. 
  - `SpeechSynthesisUtterance` is used to pronounce the Gujarati and Hindi numbers.
  - `SpeechRecognition` is used in the "Hard" practice mode to listen to the user's microphone and verify their pronunciation.

---

## 3. Data Structure

To ensure the app can be easily scaled (e.g., adding numbers up to 1,000), data is separated from the UI logic. 
- In `src/data/numbers.ts`, a massive array of objects dictates the English number and its translated counterparts. 
- The Practice module simply calculates a random index from this array to generate dynamic quizzes without hardcoding logic.
