module.exports = {
  mode: 'jit',
  purge: [
    './build/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#2BADE1',
      white: '#ffffff',
      blueGrayLight: '#F1F3F4',
      inputBorderGray: '#e2e8f0',
  },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
