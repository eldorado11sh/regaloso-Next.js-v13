/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'normal': '0px -1px 44px rgba(0, 0, 0, 0.15)',
        'small': '0px -1px 20px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}
