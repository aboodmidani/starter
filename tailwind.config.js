/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./content/**/*.md",
    "./content/**/*.yml",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
