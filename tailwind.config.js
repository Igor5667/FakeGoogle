const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "google-gray": {
          50: "#f8f9fa",
          100: "#dfe1e5",
          200: "#9aa0a6",
        },
      },
    },
  },
  plugins: [],
});
