/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'primary': 'linear-gradient(135deg, #2B2D42, #1A1A3F, #0D1B2A)',
      },
      colors:{
        // "primary":"#121212",
        // "primary":"#181818",
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