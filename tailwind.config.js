const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "3/4": "3/4vh",
      },
      screens: {
        all: { min: "0px", max: "640px" },
        mb: { min: "0px", max: "768px" },
        serviceXL: { min: "0px", max: "1500px" },
        scxl: { min: "1500px" },
        desktop: { min: "900px" },
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
        clientCard: "inset 0 -20px 50px 2px rgba(0,0,0,1)",
      },
      backgroundImage: {
        heroImage: "url('/heroimage.jpg')",
        mapDesktop: "url('/contact_desktop.jpg')",
        mapMobile: "url('/contact_mobile.jpg')",
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
        body: ["Poppins", ...defaultTheme.fontFamily.sans],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        blogheader: ["Feeling Passionate", ...defaultTheme.fontFamily.sans],
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
      height: {
        "75%": "75vh",
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
