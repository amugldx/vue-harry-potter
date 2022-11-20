/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        appBlue: "#1B303D",
        appLightBlue: "#84DDF7",
        appPink: "#EA98AE",
      },
    },
  },
  plugins: [],
};
