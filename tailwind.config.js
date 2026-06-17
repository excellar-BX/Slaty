/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: "Montserrat",
      MontserratThin: "Montserrat-thin",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      grey: "#e0e0e0",

      // Replaced orange with purple
      orange: '#6654AC',

      malachite: {
        '50': '#f2fcf1',
        '100': '#defade',
        '200': '#c0f3bf',
        '300': '#8de88d',
        '400': '#54d454',
        '500': '#32cd32',
        '600': '#209920',
        '700': '#1c791d',
        '800': '#1b601c',
        '900': '#184f1a',
        '950': '#082b09',
      },

      // Purple palette replacing web-orange
      'web-orange': {
        '50': '#f6f4fc',
        '100': '#ede8f8',
        '200': '#d9cff1',
        '300': '#bca9e6',
        '400': '#9b7cd7',
        '500': '#6654AC', // Main brand color
        '600': '#58469a',
        '700': '#493980',
        '800': '#3c2f68',
        '900': '#312652',
        '950': '#1e1734',
      },
    },
    extend: {},
  },
  plugins: [],
};
