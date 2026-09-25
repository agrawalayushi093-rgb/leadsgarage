/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A1C3E',
          darkNavy: '#0B1936',
          blue: '#2563EB',
          lightBlue: '#3B82F6',
          deepBlue: '#1D4ED8',
          teal: '#06B6D4',
          cyan: '#0EA5E9',
          emerald: '#10B981',
          purple: '#8B5CF6',
          lightBg: '#FDFBF7',
          cardBg: '#F8F9FD',
          slate: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 40px -10px rgba(37, 99, 235, 0.4)',
        'glow-teal': '0 0 40px -10px rgba(6, 182, 212, 0.4)',
        'glow-emerald': '0 0 40px -10px rgba(16, 185, 129, 0.4)',
        'card-soft': '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 30px 60px -12px rgba(15, 23, 42, 0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A1C3E 0%, #1D4ED8 60%, #2563EB 100%)',
        'card-gradient-1': 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
        'card-gradient-teal': 'linear-gradient(135deg, #06B6D4 0%, #0D9488 100%)',
        'card-gradient-emerald': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'card-gradient-purple': 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
      }
    },
  },
  plugins: [],
}
