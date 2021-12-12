module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E14985",
        secondary: "#7C97EC",
        "navy-blue": "#000733",
        "light-blue": "#3E4766",
        "dark-gray": "#202020",
        "lighter-gray": "#2B2B2B",
      },
      boxShadow: {
        card: "0px 4px 4px 0px #00000040;",
      },
      backgroundImage: {
        heroImage: "url('/heroimage.png')",
        mapImage: "url('/map.png')",
      },
      transformOrigin: {
        0: "0%",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      maxWidth: {
        section: "1250px",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["responsive", "hover", "focus", "focus-within"],
    },
  },
  plugins: [],
};
