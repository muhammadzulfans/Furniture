/** @type {import('tailwindcss').Config} */
export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
          backgroundImage: {
               "hero-pattern": "url('/src/assets/BG.png')",
          },
          extend: {
               colors: {
                    navColor: "#523620",
                    aboutColor: "#EAD0B8",
                    teamsColor: "#C9A48A",
                    footerColor: "#967259",
               },
          },
     },
     plugins: [],
};
