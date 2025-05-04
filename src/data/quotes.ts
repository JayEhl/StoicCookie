interface Quote {
  text: string;
  author: string;
}

const stoicQuotes: Quote[] = [
  {
    text: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius"
  },
  {
    text: "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius"
  },
  {
    text: "Waste no more time arguing about what a good person should be. Be one.",
    author: "Marcus Aurelius"
  },
  {
    text: "It is not death that a man should fear, but rather never beginning to live.",
    author: "Marcus Aurelius"
  },
  {
    text: "The best revenge is not to be like your enemy.",
    author: "Marcus Aurelius"
  },
  {
    text: "If it is not right, do not do it. If it is not true, do not say it.",
    author: "Marcus Aurelius"
  },
  {
    text: "How much time he gains who does not look to see what his neighbor says or does or thinks.",
    author: "Marcus Aurelius"
  },
  {
    text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius"
  },
  {
    text: "The obstacle is the way.",
    author: "Marcus Aurelius"
  },
  {
    text: "We suffer more often in imagination than in reality.",
    author: "Seneca"
  },
  {
    text: "Luck is what happens when preparation meets opportunity.",
    author: "Seneca"
  },
  {
    text: "As long as you live, keep learning how to live.",
    author: "Seneca"
  },
  {
    text: "He who is brave is free.",
    author: "Seneca"
  },
  {
    text: "We are more often frightened than hurt; and we suffer more from imagination than from reality.",
    author: "Seneca"
  },
  {
    text: "Begin at once to live, and count each separate day as a separate life.",
    author: "Seneca"
  },
  {
    text: "Difficulties strengthen the mind, as labor does the body.",
    author: "Seneca"
  },
  {
    text: "It is quality rather than quantity that matters.",
    author: "Seneca"
  },
  {
    text: "It is not the man who has too little, but the man who craves more, that is poor.",
    author: "Seneca"
  },
  {
    text: "It does not matter what you bear, but how you bear it.",
    author: "Seneca"
  },
  {
    text: "Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus"
  },
  {
    text: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus"
  },
  {
    text: "First say to yourself what you would be; and then do what you have to do.",
    author: "Epictetus"
  },
  {
    text: "Wealth consists not in having great possessions, but in having few wants.",
    author: "Epictetus"
  },
  {
    text: "Don't explain your philosophy. Embody it.",
    author: "Epictetus"
  },
  {
    text: "If you want to improve, be content to be thought foolish and stupid.",
    author: "Epictetus"
  },
  {
    text: "Only the educated are free.",
    author: "Epictetus"
  },
  {
    text: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
    author: "Epictetus"
  },
  {
    text: "No man is free who is not master of himself.",
    author: "Epictetus"
  },
  {
    text: "You become what you give your attention to.",
    author: "Epictetus"
  },
  {
    text: "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control.",
    author: "Epictetus"
  }
];

export const getDailyQuote = (): Quote => {
  const today = new Date().toLocaleDateString();
  const storedQuote = localStorage.getItem('dailyQuote');
  const storedDate = localStorage.getItem('quoteDate');
  
  if (storedQuote && storedDate === today) {
    return JSON.parse(storedQuote);
  }
  
  const randomIndex = Math.floor(Math.random() * stoicQuotes.length);
  const newQuote = stoicQuotes[randomIndex];
  
  localStorage.setItem('dailyQuote', JSON.stringify(newQuote));
  localStorage.setItem('quoteDate', today);
  
  return newQuote;
};

export default stoicQuotes;