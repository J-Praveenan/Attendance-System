/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'dark-blue' :"#013465",
        'light-blue':"#91CAFF",
        'primary':'#003465',
        'secondary':"#55ADFF",
        'hover-button':"#C1E1FF",
      },
      fontFamily:{
        mont:'Montserrat',
      }
    },
  },
  plugins: [],
}

