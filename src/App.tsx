import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from './store/useStore';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import LearnNumbers from './pages/LearnNumbers';
import LearnMonths from './pages/LearnMonths';
import PracticeMenu from './pages/PracticeMenu';
import PracticeSession from './pages/PracticeSession';

function App() {
  const { username } = useStore();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!username ? <Login /> : <Navigate to="/" />} />
        
        <Route element={username ? <Layout /> : <Navigate to="/login" />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/learn-numbers" element={<LearnNumbers />} />
          <Route path="/learn-months" element={<LearnMonths />} />
          <Route path="/practice" element={<PracticeMenu />} />
          <Route path="/practice/:lang/:level" element={<PracticeSession />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
