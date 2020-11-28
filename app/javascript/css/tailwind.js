const colors = require("tailwindcss/colors")

const theme = {
  purge: [],
  theme: {
    colors: {
      ...colors
    },
    extend: {
      colors: {
        brand: {
          light: colors.blue["100"],
          DEFAULT: colors.teal["600"],
          dark: colors.coolGray["800"]
        },
        success: {
          light: colors.green["200"],
          DEFAULT: colors.emerald["400"],
          dark: colors.emerald["700"]
        },
        info: {
          light: colors.cyan["100"],
          DEFAULT: colors.lightBlue["400"],
          dark: colors.blue["700"]
        },
        warning: {
          light: colors.yellow["200"],
          DEFAULT: colors.amber["400"],
          dark: colors.orange["400"]
        },
        error: {
          lights: colors.red["200"],
          DEFAULT: colors.red["400"],
          dark: colors.red["900"]
        },
        text: {
          light: colors.blueGray["50"],
          dark: colors.warmGray["900"]
        },
        link: {
          dark: {
            DEFAULT: colors.teal["900"],
            hover: colors.teal["700"],
            active: colors.fuchsia["800"],
            visited: colors.blue["900"]
          },
          light: {
            DEFAULT: colors.teal["100"],
            hover: colors.teal["300"],
            active: colors.fuchsia["200"],
            visited: colors.blue["100"]
          }
        },
        button: {
          light: {
            
          },
          dark: {
            
          }
        }
      }
    }
  },
  variants: {},
  plugins: [],
}

module.exports = theme
