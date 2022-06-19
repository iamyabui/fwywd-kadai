module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "origin-black": "#384359",
        "origin-green": "#008c8d",
        "bg-header": "#6bc2c3",
        "bg-footer": "#262c3a",
        "progress-color1": "#c5eaea",
        "progress-color2": "#2bb9ba",
        "border-line": "#c5eaea",
      },
    },
    screens: {
      'mobile': {'max': '894px'},
      'desktop': {'min': '895px'},
    },
  },
  plugins: [],
};
