/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["DINNextLTArabic"],
    },
    extend: {
      colors: {
        primary: "#80D0E0",
        secondary: "#3A5CA9",
        light: "#eafdff",
        black: "black",
        mygray: "#000000a6",
        mygreen:'#0EDC8D'
      },
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "720px",
        lg: "960px",
        xl: "1140px	",
        "2xl": "1140px",
      },
    },
  },
  plugins: [],
};
