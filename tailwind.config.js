/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
          ],
  theme: {
    
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(80px, 0px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-80px, 0px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'] 
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },

  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ]
}
