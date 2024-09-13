/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bitcoin": 'url("https://res.cloudinary.com/dtlejpoxq/image/upload/v1726141835/Bitcoin/395457_cxugts.png")',
        "bitcoin2": 'url("https://res.cloudinary.com/dtlejpoxq/image/upload/v1726141833/Bitcoin/3812603_xajlsp.jpg")',
        "bitcoin3": 'url("https://res.cloudinary.com/dtlejpoxq/image/upload/v1726141833/Bitcoin/ai-generated-8602781_1280_osh0uu.jpg")',
        "bitcoin4": 'url("https://res.cloudinary.com/dtlejpoxq/image/upload/v1726141835/Bitcoin/bitcoin-8629503_1920_cpdumg.jpg")',
        "bitcoin5": 'url("https://res.cloudinary.com/dtlejpoxq/image/upload/v1726141840/Bitcoin/222413_p2ndvn.jpg")',


      }
    },
  },
  plugins: [],
}