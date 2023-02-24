/// <reference types="vitest" />
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import path from 'path'

const config = defineConfig({
	build: {
		rollupOptions: {
			external: [
				'./app/frontend/Images/*',
			],
		},
	},
	plugins: [
		tsconfigPaths(),
		RubyPlugin(),
		react({
			babel: {
				plugins: ['babel-plugin-macros', 'babel-plugin-styled-components'],
			},
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'app', 'frontend'),
		},
	},
	base: './',
	test: {
		globals: true,
	},
})

export default config
