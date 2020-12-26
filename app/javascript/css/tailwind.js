const colors = require("tailwindcss/colors")

const ratios = {
  "1/2": "50%",
  "1/3": "33.333333%",
  "2/3": "66.666667%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666667%",
  "2/6": "33.333333%",
  "3/6": "50%",
  "4/6": "66.666667%",
  "5/6": "83.333333%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%"
}

const theme = {
  purge: [],
  theme: {
    colors: {
      ...colors
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: colors.purple["600"],
          hover: colors.purple["700"],
          light: colors.violet["200"],
          dark: colors.violet["900"]
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
          light: colors.lightBlue["200"],
          dark: colors.blue["800"]
        },
        warning: {
          DEFAULT: colors.yellow["500"],
          hover: colors.amber["600"],
          light: colors.yellow["200"],
          dark: colors.yellow["900"]
        },
        error: {
          DEFAULT: colors.red["400"],
          hover: colors.red["600"],
          light: colors.red["200"],
          dark: colors.red["900"]
        },
        text: {
          light: colors.blueGray["50"],
          dark: colors.warmGray["900"]
        },
        link: {
          dark: {
            DEFAULT: colors.violet["900"],
            hover: colors.purple["800"],
            active: colors.fuchsia["500"],
            visited: colors.purple["800"]
          },
          light: {
            DEFAULT: colors.teal["100"],
            hover: colors.teal["300"],
            active: colors.fuchsia["200"],
            visited: colors.blue["100"]
          }
        }
      },
      maxWidth: {
        ...ratios
      },
      maxHeight: {
        ...ratios
      }
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography")
  ],
}

module.exports = theme
