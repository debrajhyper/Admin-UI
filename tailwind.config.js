module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        'background': '#EFF3FC',
        'background-dark': '#23272b',
        'dark': '#16191c',
        'blue': '#3457DC',
        'blue-light': '#869FFD',
        'blue-dark': '#6366f1',
        'text-gray-deep': '#5D698D',
        'text-gray': '#202842',
      }
    },
  },
  plugins: [],
}
