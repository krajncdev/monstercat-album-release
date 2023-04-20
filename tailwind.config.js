/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1900px',
      },

      colors: {
        darkgray: '#383838',
        subtlegray: '#898888',
        gray: '#c4c4c4',
        blue: '#1e90ff',
        green: '#50A584',
        lightgray: '#fdfdfd',
      },

      fontFamily: {
        monum: ['Monument Extended', 'sans-serif'],
        montserrat: ['Montserrat'],
      },

      writingMode: {
        vertical: 'vertical-rl',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.writing-mode-tb': {
          writingMode: 'vertical-rl',
        },
        '.writing-mode-tb-rl': {
          writingMode: 'vertical-lr',
        },
      };

      addUtilities(newUtilities, ['responsive']);
    },
  ],
};
