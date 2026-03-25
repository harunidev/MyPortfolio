/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm dark theme — primary palette
        'warm-bg':        '#0f0a14',
        'warm-secondary': '#1c1128',

        // Dark theme colors (remapped to warm tones)
        'dark-navy':         '#0f0a14',
        'dark-navy-light':   '#1c1128',
        'dark-navy-lighter': '#2a1f35',
        'dark-blue':         '#f97316',
        'dark-blue-light':   '#fb923c',
        'dark-blue-lighter': '#fdba74',

        // Light theme colors
        'light-white':          '#f8fafc',
        'light-gray':           '#e2e8f0',
        'light-gray-dark':      '#cbd5e1',
        'light-gray-darker':    '#94a3b8',
        'light-black':          '#1e293b',
        'light-black-light':    '#334155',
        'light-orange':         '#ea580c',
        'light-orange-light':   '#f97316',
        'light-orange-lighter': '#fb923c',
        'light-cream':          '#fef3c7',
        'light-warm':           '#fed7aa',
      }
    },
  },
  plugins: [],
}
