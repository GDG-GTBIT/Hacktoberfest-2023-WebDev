/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      robotic: ['Roboto', 'sans-serif']
    }
   
  },
   plugins: [require("@tailwindcss/line-clamp")],
}

