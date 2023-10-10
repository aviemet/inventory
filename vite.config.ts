import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { ImageLoader } from 'esbuild-vanilla-image-loader'
import tsconfigPaths from 'vite-tsconfig-paths'
import FullReload from 'vite-plugin-full-reload'
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
		FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 200 }),
		vanillaExtractPlugin({
			esbuildOptions: {
				plugins: [ImageLoader()],
			},
		}),
		react({
			babel: {
				plugins: ['babel-plugin-macros', 'babel-plugin-styled-components'],
			},
		}),
	],
	resolve: {
		dedupe: ['axios'],
		alias: {
			'@': path.resolve(__dirname, 'app', 'frontend'),
		},
	},
	base: './',
	server: {
		fs: {
			strict: false,
		},
	},
})

export default config
