/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      transitionDuration: {
        DEFAULT: "300ms", 
      },
    },
  },
  plugins: [],
};
