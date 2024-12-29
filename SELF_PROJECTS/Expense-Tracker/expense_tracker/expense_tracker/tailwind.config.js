/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
      extend: {
      colors:{
        dark:"#222831",//darkmode bg
        beige_white:"#FBF3D5",//light mode bg
        my_blue:"#76ABAE",//panel
        my_red:"#A0153E",//delete col
        my_gray:"#31363F",//edit
      }
    },
  },
  plugins: [],
}

