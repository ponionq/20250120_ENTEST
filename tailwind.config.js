/** @type {import('tailwindcss').Config} */
export default {
  content: [
   './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  fontFamily: {
    sans: ['Pretendard', 'sans-serif'],
  },

  theme: {
    extend: {
        width: {
            136: "8.5rem", 
        },
        maxWidth: {
          'screen-2xl' : '1440px'
        },
        container: {
          center: true,
        },
        boxShadow: {
          custom: '0 7px 14px rgba(0, 0, 0, 0.3)', 
        },
        colors : {
          'gray' :{
            200:'#f5f5f5',
            800:'#1c1d1c'
          }
        }
    },
},
  plugins: [],
}

