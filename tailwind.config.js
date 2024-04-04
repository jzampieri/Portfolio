/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'preto': '#161616',
      'dark': '#111111',
      'white': '#DFDFDF',
      'cinza': '#C7C3D3',
      'accent': '#E1BAC5',
      'secondary': '#CEC4EF',
      'transparente': 'transparent',
    }
  },
  plugins: [],
}

