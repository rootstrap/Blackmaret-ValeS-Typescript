/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-violet': '#00031A',
        white: '#FFFFFF',
        'dark-grey': '#636363',
        grey: '#C4C4C4',
        'light-grey': '#E0E0E0',
        background: 'F4F7FA',
        'full-black': '#000000',
        focus: '#1D76EF',
        restored: '#559F21',
        hover: '#446CBC',
        'active-outline': '#9EBBF3',
        error: '#D42F1A',
        links: '#076CE0',
        active: '#254A96',
      },
    },
  },
  plugins: [],
};
