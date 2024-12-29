/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0C0C0C",
        secondary: "#A8D7D7",
        tertiary: "#151030",
        "darkTeal": "#2B7C85",
        "lightTeal": "#87ACA3",
        "formBg" : "#253632",
        "dTeal":"#004040",
        "formPlace": "#ececec"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.')",
      },
    },
  },
  plugins: [],
};