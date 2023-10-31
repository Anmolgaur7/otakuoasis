/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'cartbg': "url('./public/cartbg.jpg')",
      },
      fontSize:{
        '10xl':'11rem',
        '11xl':'12rem'
      },
      borderRadius:{
        '4xl':'3rem'
      }
    },
  },
  plugins: [],
}

