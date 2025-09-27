import { getRandomQuote } from '../data/quotes';

interface Quote {
  text: string;
  author: string;
}

interface DailyQuoteData {
  quote: Quote;
  date: string;
}

const STORAGE_KEY = 'stoiccookie-daily-quote';

export const getDailyQuote = (): Quote => {
  const today = new Date().toDateString();
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    
    if (stored) {
      const dailyData: DailyQuoteData = JSON.parse(stored);
      
      // If we have a quote for today, return it
      if (dailyData.date === today) {
        return dailyData.quote;
      }
    }
    
    // No quote for today, generate a new one
    const newQuote = getRandomQuote();
    const newDailyData: DailyQuoteData = {
      quote: newQuote,
      date: today
    };
    
    // Store the new quote for today
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newDailyData));
    
    return newQuote;
  } catch (error) {
    console.error('Error with daily quote logic:', error);
    // Fallback to random quote if localStorage fails
    return getRandomQuote();
  }
};

export const hasTodaysQuote = (): boolean => {
  const today = new Date().toDateString();
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    
    if (stored) {
      const dailyData: DailyQuoteData = JSON.parse(stored);
      return dailyData.date === today;
    }
  } catch (error) {
    console.error('Error checking daily quote:', error);
  }
  
  return false;
};

export const getStoredQuote = (): Quote | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    
    if (stored) {
      const dailyData: DailyQuoteData = JSON.parse(stored);
      return dailyData.quote;
    }
  } catch (error) {
    console.error('Error getting stored quote:', error);
  }
  
  return null;
};
