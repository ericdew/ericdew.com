/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Catamaran", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate3d(0, 9rem, 0)" },
          "10%": { transform: "translate3d(-1rem, -4rem, 0)" },
          "20%": { transform: "translate3d(-8rem, 2rem, 0)" },
          "30%": { transform: "translate3d(9rem, -9rem, 0)" },
          "40%": { transform: "translate3d(-2rem, 7rem, 0)" },
          "50%": { transform: "translate3d(-9rem, -4rem, 0)" },
          "60%": { transform: "translate3d(2rem, 6rem, 0)" },
          "70%": { transform: "translate3d(7rem, -8rem, 0)" },
          "80%": { transform: "translate3d(-9rem, 1rem, 0)" },
          "90%": { transform: "translate3d(6rem, -5rem, 0)" },
        },
      },
      animation: {
        grain: "grain 1s steps(2) infinite",
      },
    },
  },
  plugins: [],
};
