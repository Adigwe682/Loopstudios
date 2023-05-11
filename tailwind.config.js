/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily:{
        sans: ['Josefin sans', 'sans-serif'],
        alata: ['Alata']
      },
      LetterSpacing:{
        widest:'.3rem',
      }
    },
  },
  plugins: [],
}
