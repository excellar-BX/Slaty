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
      orange: '#ff7b00',
      'malachite': {
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
'web-orange': {
        '50': '#fffcea',
        '100': '#fff5c5',
        '200': '#ffeb85',
        '300': '#ffda46',
        '400': '#ffc71b',
        '500': '#ffa500',
        '600': '#e27c00',
        '700': '#bb5502',
        '800': '#984208',
        '900': '#7c360b',
        '950': '#481a00',
    },
    
    
    },
    extend: {},
  },
  plugins: [],
};
