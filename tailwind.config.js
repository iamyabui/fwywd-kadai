module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-about": "url('/bg-about.png')",
      },
      spacing: {
        1120: "70rem",
      },
    },
  },
  plugins: [],
};
