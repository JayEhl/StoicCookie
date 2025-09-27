import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getDailyQuote, hasTodaysQuote, getStoredQuote } from '../utils/dailyQuote';

interface Quote {
  text: string;
  author: string;
}

const FortuneCookie: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [showQuote, setShowQuote] = useState(false);
  const [hasSeenTodaysQuote, setHasSeenTodaysQuote] = useState(false);
  const { isDark } = useTheme();

  // Load today's quote on component mount
  useEffect(() => {
    const todaysQuote = getDailyQuote();
    setQuote(todaysQuote);
    setHasSeenTodaysQuote(hasTodaysQuote());
  }, []);

  const handleClick = () => {
    if (!isOpen) {
      // Only open if user hasn't seen today's quote yet
      if (!hasSeenTodaysQuote) {
        setIsOpen(true);
        
        setTimeout(() => {
          setShowQuote(true);
          setHasSeenTodaysQuote(true);
        }, 500);
      }
    } else {
      // Close the cookie
      setShowQuote(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        className={`cookie-container ${isOpen ? 'open' : 'float'} ${hasSeenTodaysQuote && !isOpen ? 'opacity-60' : ''}`} 
        onClick={handleClick}
        aria-label="Fortune Cookie"
        role="button"
      >
        <div className={`cookie ${isDark ? 'cookie-dark' : ''}`}>
          <div className="cookie-half left" />
          <div className="cookie-half right" />
        </div>
        
        <div 
          className={`fortune-paper ${showQuote ? 'opacity-100' : 'opacity-0'} 
                     ${isDark ? 'dark-mode text-white' : 'text-gray-800'}`}
        >
          {quote && (
            <>
              <p className={`quote-text ${isDark ? 'text-white' : 'text-gray-800'}`}>"{quote.text}"</p>
              <p className={`quote-author ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>— {quote.author}</p>
            </>
          )}
        </div>
      </div>
      
      {hasSeenTodaysQuote && !isOpen && (
        <div className="mt-4 text-center">
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            You've received your daily wisdom! ✨
          </p>
          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
            Come back tomorrow for more stoic guidance
          </p>
        </div>
      )}
    </div>
  );
};

export default FortuneCookie;