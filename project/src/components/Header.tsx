import React from 'react';
import { ScrollText, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="w-full max-w-4xl flex items-center justify-between mb-8">
      <div className="flex items-center gap-2">
        <ScrollText className={`${isDark ? 'text-amber-300' : 'text-amber-700'}`} size={28} />
        <h1 className="text-2xl font-serif font-semibold">Stoic Fortune</h1>
      </div>
      <button 
        onClick={toggleTheme}
        className={`p-2 rounded-full ${isDark ? 'bg-amber-800 text-amber-200' : 'bg-amber-100 text-amber-800'} 
                   hover:opacity-90 transition-opacity`}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  );
};

export default Header;