/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rw: {
          black: '#000000',
          dark: '#0a0a0c',
          card: '#111114',
          border: '#1f1f24',
          cyan: '#00e5ff',
          'cyan-glow': 'rgba(0, 229, 255, 0.25)',
          white: '#ffffff',
          gray: '#888892',
          lightgray: '#aaaaae',
          accent: '#00e5ff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        montserrat: ['Montserrat', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'cyan-glow': '0 0 25px rgba(0, 229, 255, 0.2)',
        'cyan-border': '0 0 0 1px rgba(0, 229, 255, 0.4)',
        'hud': '0 10px 30px rgba(0, 0, 0, 0.7), 0 0 1px rgba(255, 255, 255, 0.1)'
      }
    },
  },
  plugins: [],
}
