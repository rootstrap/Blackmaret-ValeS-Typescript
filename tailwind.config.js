/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        grey: '#C4C4C4',
        background: 'F4F7FA',
        focus: '#1D76EF',
        restored: '#559F21',
        hover: '#446CBC',
        error: '#D42F1A',
        links: '#076CE0',
        active: '#254A96',
        'dark-violet': '#00031A',
        'dark-grey': '#636363',
        'light-grey': '#E0E0E0',
        'full-black': '#000000',
        'active-outline': '#9EBBF3',
      },
      fontFamily: {
        sans: ['DM Sans'],
      },
      backgroundImage: {
        'custom-image': "url('/src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
