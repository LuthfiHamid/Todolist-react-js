/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#265073',
        secondary: '#2D9596',
        third: '#9AD0C2'
      },
    },
  },
  plugins: [],
};
