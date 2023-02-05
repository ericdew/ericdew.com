/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
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
        slideOutLeft: {
          "0%": { left: "0%", opacity: "1" },
          "100%": { left: "-25%", opacity: "0" },
        },
        slideOutRight: {
          "0%": { left: "0%", opacity: "1" },
          "100%": { left: "25%", opacity: "0" },
        },
        slideInLeft: {
          "0%": { left: "-25%", opacity: "0" },
          "100%": { left: "0%", opacity: "1" },
        },
        slideInRight: {
          "0%": { left: "25%", opacity: "0" },
          "100%": { left: "0%", opacity: "1" },
        },
      },
      animation: {
        grain: "grain 1s steps(2) infinite",
        "slide-out-left": "slideOutLeft 200ms ease-in-out",
        "slide-out-right": "slideOutRight 200ms ease-in-out",
        "slide-in-left": "slideInLeft 200ms ease-in-out",
        "slide-in-right": "slideInRight 200ms ease-in-out",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant }) {
      addVariant("fullscreen", ["&#fullscreen", "#fullscreen &"]);
    }),
  ],
};
