/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#39DB4A',
        base: '#B7F8BD',
        headTextColor: '#032C07',
        paragraphColor: '#555555'
      }
    },
  },
  plugins: [],
}