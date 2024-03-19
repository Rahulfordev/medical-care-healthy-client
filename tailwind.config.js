/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
