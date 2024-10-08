/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],  // Regular
        gilroyExtraBold: ['Gilroy-ExtraBold', 'sans-serif'],  // ExtraBold
        gilroySemiBold: ['Gilroy-SemiBold', 'sans-serif'],  // SemiBold
      },
    },
  },
  plugins: [],
}