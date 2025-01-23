/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Add this line to enable dark mode
  theme: {
    extend: {
      // fontFamily: {
      //   robotHeader: ["Space Grotesk", "sans-serif"],
      //   text: ["Space Grotesk", "sans-serif"],
      // },
      colors: {
        // primaryColor: "#222222",
        // secondaryColor: "#6f6f6f",
      },
    },
  },
  plugins: [],
}