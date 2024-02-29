/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F3F3F3',
          100: '#DADCE0',
          200: '#939B9F',
          300: '#D3D6DA',
          400: '#818181',
          500: '#939B9F'
        },
        yellow: {
          500: '#CEB02C'
        },
        green: {
          500: '#66A060',
          600: '#6AAA64'
        }
      }
    },
  },
  plugins: [],
}

