import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { getDailyQuote } from '../data/quotes';

interface Quote {
  text: string;
  author: string;
}

const FortuneCookie: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [showQuote, setShowQuote] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    setQuote(getDailyQuote());
  }, []);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setShowQuote(true);
      }, 500);
    } else {
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
                   ${isDark ? 'bg-amber-900 text-amber-100 border-amber-700' : 'bg-amber-50 text-amber-900 border-amber-200'}`}
      >
        {quote && (
          <>
            <p className={`quote-text ${isDark ? 'text-amber-100' : 'text-amber-900'}`}>"{quote.text}"</p>
            <p className={`quote-author ${isDark ? 'text-amber-200' : 'text-amber-800'}`}>— {quote.author}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default FortuneCookie;