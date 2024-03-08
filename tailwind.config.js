/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // For text
        primary: {
          "light": '#eeeeee',
          "black": '#000000',
        },
        // For text hover
        hover:{
          "light": '#c8c8c8',
          "black": '#2c2c2c',
        },
        // For Background
        secondary: {
          light:"#d6daed",
          dark:"#090012",
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

