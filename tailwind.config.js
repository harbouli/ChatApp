/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      DARK: "#131313",
      blue: "#2b09ff",
      red: "rgb(220 38 38)",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8f8f8f",
      "gray-light": "#d3dce6",
    },

    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        200: "800px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      plugins: [],
    },
  },
};
