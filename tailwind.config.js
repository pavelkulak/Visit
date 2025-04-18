/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blueprint: {
          100: 'var(--blueprint-100, #b6c5db)',
          200: 'var(--blueprint-200, #8da4c5)',
          300: 'var(--blueprint-300, #6487b0)',
          400: 'var(--blueprint-400, #4c6f97)',
          500: 'var(--blueprint-500, #3a567a)',
          600: 'var(--blueprint-600, #2a405e)',
          700: 'var(--blueprint-700, #1e2e45)',
          800: 'var(--blueprint-800, #13202f)',
          900: 'var(--blueprint-900, #0a121b)',
        },
      },
      fontFamily: {
        mono: ['Share Tech Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};