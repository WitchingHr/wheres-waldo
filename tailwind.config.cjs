/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '70%': { opacity: 0 },
          '100%': { transform: 'none', opacity: '1' }
        }
      },
      animation: {
        slide: 'slide 0.5s ease-out'
      }
    },
  },
  plugins: [],
}
