/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'serif'],
        mono: ['JetBrains Mono', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
