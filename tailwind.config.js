/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/*.{tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "780px",
      lg: "1020px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Satoshi", "sans-serif"],
    },
    colors: {
      black: "#000000",
      darkerText: "#333333",
      lighterText: "#888888",
      white: "#ffffff",
      grey: "#F5F5F5",
      purple: "#3B49DF",
      lighterPurple: "#A6ABF2",
    },
    extend: {
      spacing: {
        "1r": "1rem",
        "2r": "2rem",
        "6p": "6px",
        "10p": "10px",
      },
      borderRadius: {
        none: "0",
        small: "10px",
        medium: "20px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
