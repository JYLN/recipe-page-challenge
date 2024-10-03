/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors: {
      brown: "#854632",
      rose: {
        50: "#FFF7FB",
        800: "#7A284E",
      },
      stone: {
        100: "#F3E5D7",
        150: "#E3DDD7",
        600: "#5F564D",
        900: "#312E2C",
      },
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit Variable", "sans-serif"],
        young: ["Young Serif", "serif"],
      },
    },
  },
  plugins: [],
};
