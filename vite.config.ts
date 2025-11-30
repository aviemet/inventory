import path from "path"
import { fileURLToPath } from "url"

import react from "@vitejs/plugin-react"
import wyw from "@wyw-in-js/vite"
import { defineConfig } from "vite"
import EnvironmentPlugin from "vite-plugin-environment"
import FullReload from "vite-plugin-full-reload"
import RubyPlugin from "vite-plugin-ruby"
import tsconfigPaths from "vite-tsconfig-paths"


const __dirname = path.dirname(fileURLToPath(import.meta.url))

const config = defineConfig({
	build: {
		rollupOptions: {
			external: [
				"./app/frontend/Images/*",
			],
		},
	},
	plugins: [
		tsconfigPaths({
			projects: [path.resolve(__dirname, "tsconfig.json")],
		}),
		RubyPlugin(),
		FullReload(["config/routes.rb", "app/views/**/*"], { delay: 200 }),
		EnvironmentPlugin({
			NODE_ENV: "development",
		}),
		react({
			babel: {
				plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
			},
		}),
		wyw({
			include: ["**/*.{ts,tsx}"],
			babelOptions: {
				presets: ["@babel/preset-typescript", "@babel/preset-react"],
			},
		}),
	],
	resolve: {
		dedupe: ["axios"],
		alias: {
			"@": path.resolve(__dirname, "app", "frontend"),
		},
	},
	base: "./",
	server: {
		fs: {
			strict: false,
		},
	},
})

export default config
