/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins'],
        'montserrat':['Montserrat'],
        'open':['Open+Sans'],
      },
      colors:{
        dreamlessSleep:'#111111',
        lightBlack:'#2b2a2a',
        deepBlack:'#040404',
        amber:'#ffb400',
        nero:'#2b2a2a',
        eerieBlack: '#252525',
        lavenderGray: '#edeff6',
        darkGray:'#666',
        lightBlue : '#EEF5FF',
        darkTeal: '#1B4242',
        mideNightTeal: '#092635',
        softTeal: '#9EC8B9',

      },
      zIndex:{
        zIndex_1000:'1000',
      },
      width:{
        95:'95%'
      }
    },
  },
}

export default {
  // content: [
  //   "./index.html",
  //   "./src/**/*.{vue,js,ts,jsx,tsx}",
  // ],
 
  // theme: {
  //   extend: {
  //     fontFamily:{
  //       'poppins':['Poppins'],
  //       'montserrat':['Montserrat'],
  //       'open':['Open+Sans'],
  //     },
  //     colors:{
  //       dreamlessSleep:'#111111',
  //       lightBlack:'#2b2a2a',
  //       deepBlack:'#040404',
  //       amber:'#ffb400',
  //       nero:'#2b2a2a',
  //       eerieBlack: '#252525',
  //       lavenderGray: '#edeff6',
  //       darkGray:'#666'

  //     },
  //     zIndex:{
  //       zIndex_1000:'1000',
  //     },
  //     width:{
  //       95:'95%'
  //     }
  //   },
  // },
  plugins: [],
}