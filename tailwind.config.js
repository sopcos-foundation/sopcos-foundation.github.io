/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      colors: {
        sopcos: {
          dark: '#121212',       // Ana Arka Plan
          panel: '#1E1E1E',      // Kart/Panel Rengi
          amber: '#FFB300',      // Hot Path / Alarm
          cyan: '#00E5FF',       // Cold Path / AI
          steel: '#94A3B8',      // Pasif Metinler
          border: '#333333',     // Keskin Hatlar
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'], // Başlıklar için
        sans: ['Inter', 'sans-serif'], // Metinler için
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Hot Path Ritmi
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Cold Path Ritmi
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Markdown (Litepaper) okumak için
  ],
}