import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		RubyPlugin(),
		react({
			babel: {
				plugins: ['babel-plugin-macros', 'babel-plugin-styled-components'],
			},
		}),
		svgrPlugin({
			svgrOptions: {
				icon: true,
				typescript: true,
				dimensions: false,
			},
		}),
	],
	base: './',
})
