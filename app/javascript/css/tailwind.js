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
          DEFAULT: colors.teal["600"],
          hover: colors.teal["700"],
          light: colors.blue["100"],
          dark: colors.coolGray["800"]
        },
        success: {
          DEFAULT: colors.emerald["400"],
          hover: colors.emerald["600"],
          light: colors.green["200"],
          dark: colors.emerald["700"]
        },
        info: {
          DEFAULT: colors.lightBlue["400"],
          hover: colors.lightBlue["600"],
          light: colors.cyan["100"],
          dark: colors.blue["700"]
        },
        warning: {
          DEFAULT: colors.amber["400"],
          hover: colors.amber["600"],
          light: colors.yellow["200"],
          dark: colors.orange["400"]
        },
        error: {
          DEFAULT: colors.red["400"],
          hover: colors.red["600"],
          lights: colors.red["200"],
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
        }
      }
    }
  },
  variants: {},
  plugins: [],
}

module.exports = theme
