/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'irudium': {
          green: '#40F99B',
          mint: '#98FF98',
          lime: '#32CD32',
          neon: '#39FF14',
        }
      }
    },
  },
  plugins: [],
};