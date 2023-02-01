/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Bebas Neue", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'bg_logo': "url('/bg_logo.png')"
      },
    },
  },
  plugins: [],
}