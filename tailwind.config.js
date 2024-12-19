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
    extend: {
      colors: {
        primary: "#1E40AF", // Custom primary color
        secondary: "#9333EA", // Custom secondary color
        accent: "#F59E0B", // Custom accent color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font for sans
        serif: ["Merriweather", "serif"], // Custom font for serif
      },
    },
  },
  plugins: [require("daisyui")],
};
