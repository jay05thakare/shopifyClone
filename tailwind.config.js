const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          rose: colors.rose,
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
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
