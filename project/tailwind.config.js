/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Extended amber color palette for the main theme
        amber: {
          50: 'rgb(var(--color-paper) / <alpha-value>)',
          900: '#3d2e1e', // Deep brown for text
        }
      },
    },
  },
  plugins: [],
};