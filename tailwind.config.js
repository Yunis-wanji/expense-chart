/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  enabled: process.env.NODE_ENV === "production"
}

