/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      white: "#ffffff",
      sky: {
        100: "#2a3958",
        200: "#3c4d6f",
        300: "#525c66",
        400: "#595959",
      },
      red: {
        100: "#d71827",
        200: "#b91827",
        300: "#9b1827",
        400: "#c31827",
      },
      gray: {
        100: "#e6e6e6",
        200: "#b3b3b3",
        300: "#a6a6a6",
        400: "#cccccc",
      },
      blue: {
        100: "#0396fa",
        200: "#036ec8",
        300: "#034ba5",
        400: "#038cd2",
      },
    },
  },
  plugins: [],
};
