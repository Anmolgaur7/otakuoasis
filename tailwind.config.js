/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontSize:{
        '10xl':'11rem',
        '11xl':'12rem'
      }
    },
  },
  plugins: [],
}

