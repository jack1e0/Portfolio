/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#7697b5",
        orange: "#fb7928",
        lightOrange: "#ffb282",
        yellow: "#edb03c",
        pink: "#e6aab1",
        beige: "#f2e7e0",
        dark: "#22314a",
        transWhite: "rgba(255, 255, 255, 0.4)",
        transBlack: "rgba(10, 10, 10, 0.3)",
        transGray: "rgba(80, 80, 80, 0.7)",
        lessTransWhite: "rgba(255, 255, 255, 0.7)",
        gray: "#888888",
      },
    },
  },
  plugins: [],
};
