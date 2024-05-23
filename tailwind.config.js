/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'blue':'#211A70',
      'white':'#FFFFFF',
      'gray':'#848484',
      'searchIcon':'#484848'
    }
  },
  plugins: [],
}

