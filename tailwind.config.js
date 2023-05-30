/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        vesuvius: {
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
          100: "#013636",
          200: "#002020",
        },
      },
      fontFamily: {
        body: ["Roboto"],
      },
    },
  },
  plugins: [],
};
