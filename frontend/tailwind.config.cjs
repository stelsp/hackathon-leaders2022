/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      main: {
        dark: "#2A3958",
        middle3C: "#3C4D6F",
        middle52: "#525C66",
        middle59: "#595959",
      },
      secondary: {
        215: "#D71827",
        185: "#B91827",
        195: "#C31827",
        155: "#9B1827",
        1105: "#F2F8FC",
        11010: "#E6F0F9",
        150: "#0396FA",
        140: "#038CD2",
        110: "#036EC8",
        75: "#034BA5",
        dark: "#131720",
        BGDT: "#151515",
        BGLT: "#F8F8F8",
      },
      base: {
        white: "#FFFFFF",
        black: "#000000",
        230: "#E6E6E6",
        179: "#B3B3B3",
        166: "#A6A6A6",
      },
    },
  },
  plugins: [],
};
