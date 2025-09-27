import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getDailyQuote } from '../utils/dailyQuote';

interface Quote {
  text: string;
  author: string;
}

const FortuneCookie: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [showQuote, setShowQuote] = useState(false);
  const { isDark } = useTheme();

  // Load today's quote on component mount
  useEffect(() => {
    const todaysQuote = getDailyQuote();
    setQuote(todaysQuote);
  }, []);

  const handleClick = () => {
    if (!isOpen) {
      // Always allow opening to show today's quote
      setIsOpen(true);
      
      setTimeout(() => {
        setShowQuote(true);
      }, 500);
    } else {
      // Close the cookie
      setShowQuote(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
  };

  return (
    <div 
      className={`cookie-container ${isOpen ? 'open' : 'float'}`} 
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
  );
};

export default FortuneCookie;