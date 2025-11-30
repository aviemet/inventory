import React from "react"
import { beforeAll, vi } from "vitest"
import "@testing-library/jest-dom/vitest"

import { type SharedInertiaProps } from "@/lib/hooks/usePageProps"

import { mockInertiaLink } from "./linkUtils"

if(typeof globalThis.React === "undefined") {
	globalThis.React = React
}


export const baseMockPageProps: SharedInertiaProps = {
	component: undefined,
	errors: {},
	flash: {},
	auth: {
		form_authenticity_token: "mock-token",
		user: {
			id: 1,
			active: true,
			active_company: {
				id: 1,
				name: "Test Company",
				created_at: new Date().toISOString(),
				default_currency: "USD",
				settings: {
					primary_color: "blue",
				},
				slug: "test-company",
				updated_at: new Date().toISOString(),
			},
			active_company_id: 1,
			companies: [],
			email: "test@example.com",
			people: [],
			person: {
				id: 1,
				active: true,
				first_name: "Test",
				last_name: "User",
				name: "Test User",
				department_id: null,
				user_id: 1,
			},
			roles: [],
			table_preferences: {},
			user_preferences: {},
		},
	},
	url: "/",
	version: null,
}

export const createMockPageProps = (overrides?: Partial<SharedInertiaProps>): SharedInertiaProps => {
	return {
		...baseMockPageProps,
		...overrides,
		flash: {
			...baseMockPageProps.flash,
			...overrides?.flash,
		},
		auth: {
			...baseMockPageProps.auth,
			...overrides?.auth,
		},
	}
}

const mockPageProps = baseMockPageProps

export const mockRouter = {
	visit: vi.fn(),
	reload: vi.fn(),
	remember: vi.fn(),
	restore: vi.fn(),
	on: vi.fn(),
	off: vi.fn(),
	get: vi.fn(),
	post: vi.fn(),
	put: vi.fn(),
	patch: vi.fn(),
	delete: vi.fn(),
}

export { mockInertiaLink } from "./linkUtils"

export const mockInertiaHead = ({ children }: { children?: React.ReactNode }) => {
	return React.createElement(React.Fragment, {}, children)
}

vi.mock("@inertiajs/react", async() => {
	const actual = await vi.importActual("@inertiajs/react")
	return {
		...actual,
		usePage: () => ({
			component: undefined,
			props: mockPageProps,
			url: "/",
			version: null,
		}),
		router: mockRouter,
		Link: mockInertiaLink,
		Head: mockInertiaHead,
	}
})

beforeAll(() => {
	Object.defineProperty(window, "matchMedia", {
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
