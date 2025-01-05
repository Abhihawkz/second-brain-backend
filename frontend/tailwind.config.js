/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          100:"#eeeeef",
          200:"#e6e9ed",
          300:"#95989c",
        },
        purple:{
          100:"#d9ddee",
          200:"#9492db",
          300:"#7164c0",
        }
      }
    },
  },
  plugins: [],
}