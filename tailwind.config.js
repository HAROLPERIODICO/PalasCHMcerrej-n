/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Escanea todos los archivos React en src
    "./public/index.html"           // También el HTML principal
  ],
  theme: {
    extend: {
      colors: {
        'cerrejon-blue': '#2091F9',   // Color personalizado para tu proyecto
        'cerrejon-dark': '#0B2545',
      },
      fontFamily: {
        'custom': ['Poppins', 'sans-serif'], // Ejemplo fuente personalizada
      },
    },
  },
  plugins: [],
}
