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
        'custom-1': '0px 4px 4px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
      },
    },
  },
  options: {
    safelist: [
      'animate-enter',
      'animate-leave',
      // Add other dynamic classes that should not be purged
    ],
  },
  plugins: [],
}