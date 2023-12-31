/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
          BlueColor: 'hsl(246, 80%, 60%)',
          Lightredwork: 'hsl(15, 100%, 70%)',
          Softblueplay: 'hsl(195, 74%, 62%)',
          Lightredstudy: 'hsl(348, 100%, 68%)',
          Limegreenexercise: 'hsl(145, 58%, 55%)',
          Violetsocial: 'hsl(264, 64%, 52%)',
          Softorangeselfcare: 'hsl(43, 84%, 65%)',
          Darkblue: 'hsl(235, 46%, 20%)',
          Desaturatedblue: 'hsl(235, 45%, 61%)',
          PaleBlue:'hsl(236, 100%, 87%)',
          Verydarkblue: 'hsl(226, 43%, 10%)',
      },
      fontFamily:{
        'RubikFont': 'Rubik, sans-serif',
      }
    },
  },
  plugins: [],
}

