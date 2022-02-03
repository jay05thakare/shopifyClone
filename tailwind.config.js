const colors = require('tailwindcss/colors');
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          rose: colors.rose,
          cyan: colors.cyan,
          'regal-blue': '#243c5a',
          'primary': '#008060',
          'secondary': '#007B5C',
          'dark-primary': '#00664d',
          'light-primary': '#009973',
          'bg-primary': 'rgba(0, 128, 96,0.06)',
          'bg-hover': 'rgba(0, 128, 96,0.03)',
          'dark-text': '#202223',
          'light-text': '#6D7175',
          'icon-primary': '#5c5f62',
        },
        fontSize: {
          'xxs': '.7rem',
        },
    },
    screens: {
      // adding xs to the rest
      xs: "475px",
      // if you did not add this, you would have only "xs"
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@themesberg/flowbite/plugin'),
  ],
  content: [
    "./node_modules/@themesberg/flowbite/**/*.js"
]
}
