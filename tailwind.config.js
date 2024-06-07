/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f9f9f9",
        secondary: "#101010",
        darkText: "#131313CC",
        whiteText: "#F9FDF9E5",
        greenText: "#35A137",
        orangee: "#e27b16",
      },
    },
  },
  plugins: [],
};
