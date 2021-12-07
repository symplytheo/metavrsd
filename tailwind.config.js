const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['GT Eesti Pro Display', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          light: '#00aca5',
          DEFAULT: '#00f7ed',
          dark: '#33f8f0',
        },
      },
      fontSize: {
        '5.7vw': '5.7vw',
      },
      height: {
        30: '7.5rem',
      },
      width: {
        42: '10.5rem',
        '30vw': '30vw',
        '67.5vw': '67.5vw',
      },
      padding: {
        '5vw': '5vw',
      },
      margin: {
        '5vw': '5vw',
      },
    },
  },
  plugins: [],
}
