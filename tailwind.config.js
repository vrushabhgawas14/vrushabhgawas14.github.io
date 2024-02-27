/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#cccccc',
        hover: '#eeeeee',
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

