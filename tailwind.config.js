// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // 500: '',
          // 600: '#your-primary-color-darker',
        }
      }
    },
  },
  plugins: [],
}
