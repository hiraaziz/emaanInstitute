/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'pink':'#E04040',
      'darkpink':'#c90c0c',
      'lightpink':'#ffa3a3',
      'white':'#ffffff',
      'black':'#382020'
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
