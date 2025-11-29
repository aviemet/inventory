import { mergeConfig } from 'vite'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, {
	define: {
		'process.env.NODE_ENV': '"test"',
		'__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })',
	},
	test: {
		globals: true,
		environment: 'happy-dom',
		coverage: {
			provider: 'v8',
			include: ['app/frontend/**/*.test.{ts,tsx}'],
		},
		setupFiles: ['/tests/helpers/setup.ts', '/tests/helpers/mockServer.ts'],
	},
})
