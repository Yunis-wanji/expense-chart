/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "light-pink": "#ec755e",
        "light-blue": "#76b5bc",
        "brown-1":"#332113",
        "grey-1":"#b3aea8",
        "peach":"#f7e9dc",
        "white-1":"#fffcf7"
    },
  },
  plugins: [],

  enabled: process.env.NODE_ENV === "production"
}
}
