/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    
    extend: {
      colors:{
        'ourpink': '#C8447B',
        'ourpurple': '#331748',
        'babypink': '#EFC0D2',
        'gradpink':'#C92C6A',
        'gradpurple':'#461F72',
        'hoverpink':'#B41C5B',
        'hoverpurple':'#705187',
      },
      backgroundImage: {
        'daysbackground': "url('images/TIMER 1.png')",
        'hoursbackground': "url('images/TIMER 2.png')",
        'minutesbackground': "url('images/TIMER 3.png')",
        'secondsbackground': "url('images/TIMER 4.png')",
        
      },
      // fontFamily: {
        // 'fina-sans':['"Dancing Script"', cursive,...], 
      // },
    },
  },
  plugins: [],
}
