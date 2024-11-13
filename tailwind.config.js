/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#f34f01",
        primary: "#ffffff",
        // 'primary': '#19191a',
        secondary: "#219BE4",
        // 'secondary': '#5081a1',
      },
      boxShadow: {
        large: "0px 0px 30px 10px",
      },
    },
  },
  plugins: [],
};
