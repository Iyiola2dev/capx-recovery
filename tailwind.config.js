/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bitcoin": 'url("https://res.cloudinary.com/dtlejpoxq/image/upload/v1726141835/Bitcoin/395457_cxugts.png")'
      }
    },
  },
  plugins: [],
}