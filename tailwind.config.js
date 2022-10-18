/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",],
  theme: {
    extend: {
      colors: {
        "primary": "#950FFC",
        "secondary": "#E2D7EB"
      }
    },
  },
  plugins: [require("daisyui")],
}
