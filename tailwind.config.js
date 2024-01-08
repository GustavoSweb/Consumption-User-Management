/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
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