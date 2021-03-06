module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./app/frontend/css/tailwind.js"),
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009"
      },
      stage: 3
    }),
    require("postcss-nested"),
    require("autoprefixer"),
  ]
}
