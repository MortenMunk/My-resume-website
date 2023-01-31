/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        'light-navy': '#567189',
      },
    },
  },
  plugins: [],
}
