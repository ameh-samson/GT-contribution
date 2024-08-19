/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
      },

      colors: {
        // Primary Colors
        brightBlue: 'hsl(220, 98%, 61%)',
        checkBackgroundStart: 'hsl(192, 100%, 67%)',
        checkBackgroundEnd: 'hsl(280, 87%, 65%)',

        // Neutral Colors for Light Theme
        veryLightGray: 'hsl(0, 0%, 98%)',
        veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        lightGrayishBlue: 'hsl(233, 11%, 84%)',
        darkGrayishBlue: 'hsl(236, 9%, 61%)',
        veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',

        // Neutral Colors for Dark Theme
        veryDarkBlue: 'hsl(235, 21%, 11%)',
        veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
        lightGrayishBlueDark: 'hsl(234, 39%, 85%)',
        lightGrayishBlueHover: 'hsl(236, 33%, 92%)',
        darkGrayishBlueDark: 'hsl(234, 11%, 52%)',
        veryDarkGrayishBlueDark: 'hsl(233, 14%, 35%)',
        veryDarkGrayishBlueDarker: 'hsl(237, 14%, 26%)',
      },
    },
  },
  plugins: [],
};
