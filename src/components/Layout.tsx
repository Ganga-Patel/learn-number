import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { BookOpen, Calendar, Gamepad2, LayoutDashboard, LogOut } from 'lucide-react';

const Layout = () => {
  const { username, logout } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            <BookOpen />
            LearnGujHindi
          </Link>
          <div className="flex items-center gap-4">
            <span>Hi, {username}</span>
            <button onClick={handleLogout} className="flex items-center gap-1 bg-indigo-700 hover:bg-indigo-800 px-3 py-1 rounded transition">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto flex gap-4 p-4 overflow-x-auto">
          <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link to="/learn-numbers" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium">
            <BookOpen size={18} /> Numbers
          </Link>
          <Link to="/learn-months" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium">
            <Calendar size={18} /> Months
          </Link>
          <Link to="/practice" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium">
            <Gamepad2 size={18} /> Practice
          </Link>
        </div>
      </nav>

      <main className="flex-1 container mx-auto p-4 max-w-5xl">
        <Outlet />
      </main>
      
      <footer className="bg-gray-100 p-4 text-center text-gray-500 text-sm mt-auto border-t">
        &copy; {new Date().getFullYear()} Language Learning App
      </footer>
    </div>
  );
};

export default Layout;
