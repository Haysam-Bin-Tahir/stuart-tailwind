module.exports = {
  mode: "jit",
  purge: ["./build/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#2BADE1",
      white: "#ffffff",
      blueGrayLight: "#F1F3F4",
      inputBorderGray: "#e2e8f0",
      lightBlue: "#93C5FD",
      black: "#000",
      grey: "#D8D8D8",
      darkGrey: "#999",
      green: "#10B981",
      yellow: "#F59E0B",
    },
    boxShadow: {
      DEFAULT: "5px 5px 5px rgba(0 0 0 / 10%)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
