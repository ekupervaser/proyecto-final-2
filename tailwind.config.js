/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
        },
      },
      gridTemplateRows: {
        layout: '64px 1fr 100px',
      },
      fontFamily: {
        sans: ['Red Hat Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}