/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: "#457b9d",
        second: "#1d3557",
        third: "#a8dadc",
        fourth: "#e63946"
      }
    },
  },
  plugins: [],
}

