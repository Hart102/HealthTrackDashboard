/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cl-green": "#01F0D0",
        "cs-gray-100": "#707070",
        "cs-gray-50": "#072635",
        "cs-pink": "#E66FD2",
        "cs-purple": "#8C6FE6",
        "primaryAccentLight": "#E0F3FA",
        "warmAccentLight": "#FFE6E9",
        "secondaryAccent": "#FFE6F1",
        "PanelBackground": "#F6F7F8"
      },
     
    },
  },
  plugins: [],
}

