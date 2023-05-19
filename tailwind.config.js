/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'vazirmatn': ['Vazirmatn'],
      'hanken': ['Hanken Grotesk']
    },
    container: {
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      }
    },
  },
  plugins: [
    require("tailwindcss-flip")
  ],
}

