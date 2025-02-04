/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // add this line
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors: {
        primary: '#391d1c',
        secondary: '#fdf0e7',
      }
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}

