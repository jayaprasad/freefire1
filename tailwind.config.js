/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'neon-red': '#ff0055',
        'neon-orange': '#ff5500',
        'neon-purple': '#aa00ff',
        'glass': 'rgba(255, 255, 255, 0.1)'
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.5)'
      },
      borderRadius: {
        'lg': '0.75rem',
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
