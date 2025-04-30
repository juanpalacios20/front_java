/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const { heroui } = require("@heroui/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#991B1B",
      },
    },
  },
  plugins: [heroui()],
};
