const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lexend Deca', ...defaultTheme.fontFamily.sans],
        'roboto': ['Lexend Deca'],
        'lexend': 'Lexend Deca, sans-serif',
        'montserrat': ['montserrat', 'sans-serif'],
        'lato': ['lato', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}