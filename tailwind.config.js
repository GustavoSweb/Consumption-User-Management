/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {

    screens: {
      'lv': '0px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        'showAlert': 'showAlert 6s ease-in-out infinite',
        'modalEnter': 'modalEnter 0.6s ease-in-out forwards',
        'cardEnter': 'cardEnter 0.6s ease-in-out forwards',
        'modalDone': 'modalDone 0.6s ease-in-out forwards',
        'cardDone': 'cardDone 0.6s ease-in-out forwards ',
      },
      keyframes: {
        showAlert: {
          '0%, 100%': { transform: 'translateX(300px)' },
          '18%, 80%': { transform: 'translateX(-60px)' },
        },
        modalEnter:{
          '0%': { opacity:'0%' },
          '100%': { opacity:'100%' },
        },
        modalDone: {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%' },
        },
        cardEnter:{
          '0%, 20%': { opacity:'0%', transform:'scale(0.8)' },
          '100%': { opacity:'100%', transform:'scale(1)' },
        },
        cardDone: {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%', transform: 'scale(0.8)' },
        },
      }

    },
  },
  plugins: [],
}