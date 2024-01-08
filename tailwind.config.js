/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      animation: {
        'showAlert': 'showAlert 6s ease-in-out infinite',
      },
      keyframes: {
        showAlert: {
          '0%, 100%': { transform: 'translateX(300px)' },
          '18%, 80%': { transform: 'translateX(-60px)' },
        }
      }

    },
  },
  plugins: [],
}