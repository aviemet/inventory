const path = require('path');
const tsconfigPaths = require("vite-tsconfig-paths").default

module.exports = {
  "stories": [
    "../app/frontend/stories/**/*.stories.mdx",
    "../app/frontend/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
   viteFinal: async (config) => {
    config.plugins.push(
      tsconfigPaths()
    )
    return config
  },
}
