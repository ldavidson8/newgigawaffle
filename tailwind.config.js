module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        all: { min: "0px", max: "640px" },
      },
      colors: {
        primary: "#E14985",
        secondary: "#7C97EC",
        "navy-blue": "#000733",
        "light-blue": "#3E4766",
        "dark-gray": "#202020",
        "lighter-gray": "#2B2B2B",
        "light-navy": "#1E2236",
      },
      boxShadow: {
        card: "0px 4px 4px 0px #00000040;",
      },
      backgroundImage: {
        heroImage: "url('/heroimage.png')",
        mapImage: "url('/map.png')",
        dash: "linear-gradient(180deg,#e5e7eb,#e5e7eb 50%,transparent 0,transparent);",
      },
      backgroundSize: {
        dashGap: "1px 8px",
      },
      transformOrigin: {
        0: "0%",
        1: "1px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        blogheader: ["Feeling Passionate", "sans-serif"],
      },
      maxWidth: {
        section: "1250px",
        nav: "800px",
      },
      minWidth: {
        section: "1250px",
      },
      zIndex: {
        max: "9999",
      },
      screens: {
        desktop: "900px",
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
