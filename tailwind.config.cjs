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
        },
        open: {
          '0%': { height: '0px', transform: 'skew(8deg, 11deg)' },
          '25%': { height: '44px', transform: 'unset' },
          '38%': { height: '44px' },
          '63%': { height: '84px' },
          '76%': { height: '84px' },
          '100%': { height: '126px' },
        }
      },
      animation: {
        slide: 'slide 0.5s ease-out',
        open: 'open 0.3s linear'
      }
    },
  },
  plugins: [],
}
