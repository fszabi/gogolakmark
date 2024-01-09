/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "35em",
      md: "50em",
      lg: "65em",
      xl: "80em",
      "2xl": "130em",
    },
    fontSize: {
      sm: ["1rem", "1.5"],
      base: ["1.125rem", "1.5"],
      lg: ["1.375rem", "1.4"],
      xl: ["clamp(1.56rem, 0.79vw + 1.36rem, 1.8rem)", "1.3"],
      "2xl": ["clamp(1.8rem, 1.29vw + 1.63rem, 2.66rem)", "1.3"],
      "3xl": ["clamp(2.44rem, 2.02vw + 1.94rem, 3rem)", "1.2"],
      "4xl": ["clamp(2.6rem, 2.8vw + 2rem, 4.73rem)", "1.2"],
    },
    extend: {
      colors: {
        primary: {
          300: "#2fe4931d",
          400: "#2ee491",
        },
        secondary: {
          300: "#7ca8ee4c",
          400: "#7aa7ee",
        },
        accent: "#5e60ea",
        backgroundColor: "#eefdf5",
        textColor: "#03170d",
      },
      fontFamily: {
        sans: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
};
