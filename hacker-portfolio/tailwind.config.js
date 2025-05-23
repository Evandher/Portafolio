/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Fondo
          'bg-dark': '#0a0a0a',
          'bg-deep': '#0f111a',
  
          // Neon primarios
          'neon-cyan': '#00FFFF',
          'neon-magenta': '#FF00FF',
          'neon-purple': '#8A2BE2',
          'neon-blue': '#00BFFF',
  
          // Alertas / soporte
          'neon-red': '#FF4500',
          'soft-white': '#F8F8F8',
        },
        fontFamily: {
          mono: ['Fira Code', 'monospace'],
        },
      },
    },
    plugins: [],
  }
  