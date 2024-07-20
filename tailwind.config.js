/** @type {import('tailwindcss').Config} */
import daisyui from "./node_modules/daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightpink: "#fff1f1",
      green: "#4cd137",
      blue: "#74b9ff",
      yellow: "#ffda76",
      black: "#202325",
      red: "#ff324d",
      white: "#ffffff",
      lightgGrey: "#f7f8fb",
      hr: "#eeeeee",
      light: "#95a5a6",
    },
    extend: {},
  },
  plugins: [daisyui],
};
