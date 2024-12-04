/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // If you are using Vite or include index.html directly
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Include all relevant file extensions in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Edu AU VIC WA NT Pre", "cursive"],
        Urbanist: ["Urbanist"]
      }
    },
  },
  plugins: [],
}

