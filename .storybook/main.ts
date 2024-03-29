import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../app/frontend/stories/**/*.mdx", "../app/frontend/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {},
  features: {
    storyStoreV7: true
  },
  docs: {
    autodocs: "tag"
  }
};

export default config;