/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14131a',
        paper: '#fbfaf8',
        cloud: '#f4f3f0',
        line: '#e8e6e1',
        muted: '#78766f',
        brand: {
          50: '#eef0ff',
          100: '#e0e3ff',
          200: '#c5caff',
          300: '#a2a8ff',
          400: '#7d7ffb',
          500: '#635bf0',
          600: '#5245db',
          700: '#4437b8',
          800: '#382f93',
          900: '#312a72',
        },
        good: '#1f9d55',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          '"Space Grotesk"',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 2px rgba(20, 19, 26, 0.04), 0 1px 24px rgba(20, 19, 26, 0.03)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
