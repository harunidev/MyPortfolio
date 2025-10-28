/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark theme colors - Dark navy blue with light blue accents
        'dark-navy': '#0a0e27',
        'dark-navy-light': '#1a1f3a',
        'dark-navy-lighter': '#2a2f4a',
        'dark-blue': '#0ea5e9',
        'dark-blue-light': '#38bdf8',
        'dark-blue-lighter': '#7dd3fc',
        
        // Light theme colors - Gray and orange tones
        'light-white': '#f8fafc',
        'light-gray': '#e2e8f0',
        'light-gray-dark': '#cbd5e1',
        'light-gray-darker': '#94a3b8',
        'light-black': '#1e293b',
        'light-black-light': '#334155',
        'light-orange': '#ea580c',
        'light-orange-light': '#f97316',
        'light-orange-lighter': '#fb923c',
        'light-cream': '#fef3c7',
        'light-warm': '#fed7aa',
      }
    },
  },
  plugins: [],
}
