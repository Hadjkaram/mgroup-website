/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // <--- Regarde à la racine (C'est sûrement ici qu'ils sont)
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // <--- Regarde les composants à la racine
    "./src/**/*.{js,ts,jsx,tsx,mdx}",        // <--- Regarde dans src (au cas où)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}