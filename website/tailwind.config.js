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
        loser: '#ee6c4d',
        scifi1: "#e4eff0",
        scifi2: "#78cce2",
        scifi3: "#4e7988",
        scifi4: "#005066",
        scifi5: "#002439"
      },
      dropShadow: {
        'scifi1': '0 10px 8px rgba(228, 239, 240, 0.5)',
        'scifi2': '0 10px 8px rgba(120, 204, 226, 0.3)',
        'scifi3': '0 10px 8px rgba(78, 121, 136, 0.4)',
        'scifi4': '0 10px 8px rgba(0, 80, 102, 0.3)',
        'scifi5': '0 10px 8px rgba(0, 36, 57, 0.5)'
      },
      backgroundImage: {
        'emoji-pattern': "linear-gradient(rgba(228, 239, 240, 0.4), rgba(228, 239, 240, 0.4)), url('/images/star-sky.jpg')",
      }
    },
  },
  plugins: [],
}
