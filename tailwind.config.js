/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // For text
        primary: {
          light: "#eeeeee",
          black: "#000000",
        },
        // For text hover
        hover: {
          light: "#bdbdbd",
          black: "#001136",
        },
        // For Background
        secondary: {
          light: "#d6daed",
          "light-dropdown": "#d6daed7a",
          dark: "#090012",
          "dark-dropdown": "#12000085",
        },
      },
      screens: {
        sm: { max: "900px" },
        md: { max: "1024px" },
        lg: "1025px",
      },
    },
  },
  plugins: [],
};
