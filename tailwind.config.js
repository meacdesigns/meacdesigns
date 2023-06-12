/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        padding: "1rem",
        center: true,
        screens: {
          "2xl": "1140px",
          xl: "1140px",
          lg: "960px",
          md: "720px",
          sm: "540px",
        },
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        primary: "#ccde02",
        secondary: "#282b2d",
        tagling2: "#575a7b",
        heading2: "#282b2d",
        heading3: "#282b2d",
        borderColor: "#404043",
      },
      boxShadow: {
        contactcard: "0 0 12px 0 rgb(0 0 0 / 10%)",
      },
    },
  },
  plugins: [],
};
