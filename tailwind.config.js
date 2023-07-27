/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"]
      },
      colors: {
        white: "#FFF",
        black: " #303841",
        gray: "#777777",
        yellow: "#F6C90E",
        "light-gray": "#e1e7ed"
      }
    }
  },
  plugins: [],
}
