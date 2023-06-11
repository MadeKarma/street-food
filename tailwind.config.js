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
        third: "#1d3557"
      }
    },
  },
  plugins: [],
}

