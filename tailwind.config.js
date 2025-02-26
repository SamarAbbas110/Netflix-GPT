/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-rgb': 'rgb(20,19,18)',
        'red-rgb' : 'rgb(229,9,20)',
        "white-button" : "#FFFFFF",
        "info-button" : "#73736E"
      },
    },
  },
  plugins: [],
};