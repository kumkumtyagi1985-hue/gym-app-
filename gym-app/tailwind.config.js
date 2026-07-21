/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          900: '#050505',   // App background - pure black
          800: '#121412',   // Card background
          700: '#1E211E',   // Elevated card / borders
          600: '#2B2F2B',
        },
        accent: {
          teal: '#22C55E',   // Primary Green (was neon teal)
          cyan: '#4ADE80',   // Secondary lighter green
        },
        status: {
          under: '#5EEAD4',
          normal: '#00F5D4',
          over: '#FBBF24',
          obese: '#FB7185',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 245, 212, 0.25)',
      },
    },
  },
  plugins: [],
}
