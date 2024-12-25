/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',         // Para garantir que o arquivo HTML seja processado
    './**/*.{html,js}',      // Para pegar qualquer HTML ou JS em qualquer subdiretório
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}


