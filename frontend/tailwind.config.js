export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#FFF5F5'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}