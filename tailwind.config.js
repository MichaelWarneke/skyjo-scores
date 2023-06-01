/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde58a",
          300: "#fbd24e",
          400: "#fabe25",
          500: "#f49d0c",
          600: "#d87607",
          700: "#bc560a",
          800: "#923f0e",
          900: "#78340f",
          950: "#451a03",
        },
        secondary: {
          50: '#f2f3ff',
          100: '#e7e7ff',
          200: '#d3d5ff',
          300: '#afb0ff',
          400: '#8681ff',
          500: '#5f4fff',
          600: '#4a2bfc',
          700: '#4220e9',
          800: '#3114c3',
          900: '#2b139f',
          950: '#16096c',
        },
      },
      fontFamily: {
        body: ["Roboto"],
      },
    },
  },
  plugins: [],
};
