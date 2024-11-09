/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#0A192F",
        "secondary":"#F97316",
        "tertiary":"#54D6BB",
      }
    },
    screens: {

 lg:{max: "2023px"},
//  sm :{max : "639px"},    
sm:{max:"1000px"}, //for both tab & mobile

     
      // 'lg': '1024px',
      
      // 'md': '768px',
      // 'xl': '1280px',
      // '2xl': '1536px',
      
    }
  },
  plugins: [],
}