module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
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
    extend: {},
  },
  plugins: [],
}
