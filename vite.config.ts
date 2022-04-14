import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
// import WindiCSS from 'vite-plugin-windicss'
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		RubyPlugin(),
		react(),
		// WindiCSS(),
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
