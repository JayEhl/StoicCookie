import React from 'react';
import FortuneCookie from './components/FortuneCookie';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#1c472b] flex items-center justify-center">
        <FortuneCookie />
      </div>
    </ThemeProvider>
  );
}

export default App;