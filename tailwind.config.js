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
        radar: {
          50: '#e6fff5',
          100: '#c2ffe5',
          200: '#8affcf',
          300: '#47fab2',
          400: '#14e893',
          500: '#00cc78',
          600: '#00a35c',
          700: '#007f4a',
          800: '#03643c',
          900: '#055234',
          950: '#002f1d',
          glow: '#00ff88',
        },
        cyanGlow: '#00f0ff',
        darkBg: '#05070c',
        cardBg: '#0b0f19',
        cardBorder: 'rgba(0, 255, 136, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'radar-sweep': 'sweep 4s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 8px rgba(0, 255, 136, 0.4))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': "radial-gradient(rgba(0, 255, 136, 0.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
