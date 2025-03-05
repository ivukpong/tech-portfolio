// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#112240",
        accent: "#64ffda",
        text: "#ccd6f6",
        textMuted: "#8892b0",
      },
    },
  },
  plugins: [],
};
