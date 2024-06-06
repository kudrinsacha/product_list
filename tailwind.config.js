/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minWidth: {
        '5xl': '1024px',
      },
      zIndex: {
        full: '1500',
      },
    },
  },
  plugins: [],
};
