/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins'],
        'montserrat':['Montserrat'],
      },
      colors:{
        dreamlessSleep:'#111111',
        lightBlack:'#2b2a2a',
        deepBlack:'#040404',
        amber:'#ffb400',
        nero:'#2b2a2a',

      }
    },
  },
  plugins: [],
}