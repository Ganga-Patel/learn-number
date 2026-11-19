import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from './store/useStore';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import LearnNumbers from './pages/LearnNumbers';
import LearnMonths from './pages/LearnMonths';
import Flashcards from './pages/Flashcards';
import PracticeMenu from './pages/PracticeMenu';
import PracticeSession from './pages/PracticeSession';
import NumberLookup from './pages/NumberLookup';

function App() {
  const { username } = useStore();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!username ? <Login /> : <Navigate to="/" replace />} />

        <Route element={username ? <Layout /> : <Navigate to="/login" replace />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/learn-numbers" element={<LearnNumbers />} />
          <Route path="/learn-months" element={<LearnMonths />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/practice" element={<PracticeMenu />} />
          <Route path="/practice/:lang/:level" element={<PracticeSession />} />
          <Route path="/practice/:category/:lang/:level" element={<PracticeSession />} />
          <Route path="/lookup" element={<NumberLookup />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
