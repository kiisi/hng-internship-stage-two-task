/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#012148'
      },
      boxShadow: {
        'custom': '0px 4px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}