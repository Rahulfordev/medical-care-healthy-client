/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],

  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        custom: ['0 8px 16px 0 rgba(225, 36, 84, .2)'],
      },
    },
  },
  plugins: [require("daisyui")],
};
