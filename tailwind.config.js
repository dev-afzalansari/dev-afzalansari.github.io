/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,.html}",
  ],
  theme: {
    extend: {
      colors: {
        'white-background': "#f4f4f4",
        'black-background': "#222831",
        'blue-prime': '#84beff',
        'gray-text': "#393e46",
        'gray-title': "#283739",
        'white-title': "#f8f8f8",
        'white-text': "#e0e0e0"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [],
  darkMode: "class"
}

