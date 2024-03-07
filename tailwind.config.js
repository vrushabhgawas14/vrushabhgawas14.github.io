/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "light": '#eeeeee',
          "black": '#000000',
        },
        hover:{
          "light": '#c8c8c8',
          "black": '#2c2c2c',
        }
      },
      screens: {
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: '769px',
      }
    },
  },
  plugins: [],
}

