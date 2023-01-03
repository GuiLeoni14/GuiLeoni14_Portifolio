/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      belle: ['La Belle Aurore', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        point: `url('/img/backgrounds/points.svg')`,
        'gradient-orange': 'linear-gradient(to right, #fc00ff, #00dbde)',
      },
      colors: {
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        },
        yellow: {
          200: '#DFDF20',
        },
      },
    },
  },
  plugins: [],
};
