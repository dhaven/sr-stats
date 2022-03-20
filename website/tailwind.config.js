module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        winner: '#3d5a80',
        winnerlight: "#c5d2e3",
        winnerdark: "#375173",
        loser: '#ee6c4d'
      }
    },
  },
  plugins: [],
}
