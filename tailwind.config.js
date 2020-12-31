module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js', './src/**/*.postcss'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        steel: {
          '800': '#35495e'
        },
        olive: {
          '200': '#E1F2C0',
          '500': '#86b300',
        },
        sunset: {
          '300': '#FFA3B4',
        }
      },
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      borderRadius: {
        'xl': '1rem',
        '15': '15%',
      },
      minWidth: {
        'screen': '100vw'
      },
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
      }
    }
  },
  variants: {},
  plugins: [],
}
