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
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
