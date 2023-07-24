/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },

      colors: {
        primaryOrange: "#EF7E21",
        secondaryOrange: "#F9995D",
        backgroundGray: "#F6F8F7",
      },
      
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
    },
  },
  plugins: [],
}