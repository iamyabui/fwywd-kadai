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
        "progress-color-primary": "#c5eaea",
        "progress-color-secondary": "#2bb9ba",
        "border-line": "#c5eaea",
      },
    },
    screens: {
      'mobile': {'max': '894px'},
      'desktop': {'min': '895px'},
    },
    backgroundImage: {
      'img': "url('/bg-skills.png'), url('/bg-about.png'), url('/bg-future.png')",
      'img-mobile': "url('/bg-skills.png'), url('/bg-future.png')",
    },
    backgroundPosition: {
      'position': '0px 500px, 0px top, 0px 1400px',
      'position-mobile': '0px 1310px, 0px bottom'
    },
    backgroundSize: {
      'size': '100% 33%, 100% auto, 100% 50%',
      'size-mobile': '100% 25%, 100% %'
    }
  },
  plugins: [],
};
