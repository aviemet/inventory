import { beforeAll, vi } from 'vitest'

beforeAll(() => {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		configurable: true,
		value: vi.fn((query: string) => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: vi.fn(),
			removeListener: vi.fn(),
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
			dispatchEvent: vi.fn(),
		})),
	})

	globalThis.ResizeObserver = class ResizeObserver {
		observe = vi.fn()
		unobserve = vi.fn()
		disconnect = vi.fn()
		constructor(_callback: ResizeObserverCallback) {}
	}
})
