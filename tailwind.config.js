/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"'],
        sansing: ['"Saira Condensed", "sans-serif"'],
        manrope: ['Manrope', 'sans-serif'],
        helveticaLight: ['"Helvetica Neue-Light"', 'Arial', 'sans-serif', 'Manrope'], 
        montserrat: ['Montserrat', 'sans-serif',],
        roboto: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'], // Adding Open Sans to sans font family
      },
    },
  },
  plugins: [],
}