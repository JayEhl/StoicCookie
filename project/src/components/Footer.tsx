import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { isDark } = useTheme();
  
  return (
    <footer className={`mt-8 text-center text-sm ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
      <p>Wisdom from the Stoics • {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;