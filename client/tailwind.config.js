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
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        "slide-from-right": {
          '0%': { transform: 'translateX(200%)', opacity: 0 },
          '50%': { transform: 'translateX(100%)', opacity: 0 },
          '75%': { transform: 'translateX(50%)', opacity: 0.5 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        shrink: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        "shrink-from-left": {
          '0%': { transform: 'scaleX(128px)', opacity: 1 },
          '100%': { transform: 'scaleX(40px)', opacity: 0 },
        }
      },
      animation: {
        grow: 'grow 1.5s linear',
        shrink: 'shrink 1s ease-in-out',
      }
    }
  }
}
