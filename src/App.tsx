import React from 'react';
import FortuneCookie from './components/FortuneCookie';
import InstallPrompt from './components/InstallPrompt';
import { ThemeProvider } from './contexts/ThemeContext';

// Updated with improved design

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-green-800 flex items-center justify-center">
        <FortuneCookie />
        <InstallPrompt />
      </div>
    </ThemeProvider>
  );
}

export default App;