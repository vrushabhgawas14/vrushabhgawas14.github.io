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
          "light-dropdown":"#d6daed7a",
          dark:"#090012",
          "dark-dropdown":"#12000085",
        }
      },
      screens: {
        sm: { max: '900px' },
        md: { max: '1024px' },
        lg: '1025px',
      }
    },
  },
  plugins: [],
}

