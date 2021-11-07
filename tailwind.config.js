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
      gray: "#DEDEDE",
    },
    extend: {
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "3/10": "30%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
