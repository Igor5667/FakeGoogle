/** @type {import('tailwindcss').Config} */
module.exports = {
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
};
