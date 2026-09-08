/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        arcade: {
          dark: '#04030a',
          secondary: '#080614',
          card: '#0d0a18',
          cyan: '#00f0ff',
          magenta: '#ff007a',
          yellow: '#ffe600',
          purple: '#8b5cf6',
          green: '#00ff9c',
        }
      },
      fontFamily: {
        arcade: ['"Press Start 2P"', 'cursive'],
        title: ['"Chakra Petch"', 'sans-serif'],
        code: ['"Fira Code"', 'monospace'],
        body: ['"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
