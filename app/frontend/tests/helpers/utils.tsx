import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { vi } from 'vitest'
import Providers from '@/layouts/Providers'
import type { SharedInertiaProps } from '@/lib/hooks/usePageProps'

const mockPageProps: SharedInertiaProps = {
	component: undefined,
	errors: {},
	flash: {},
	auth: {
		form_authenticity_token: 'mock-token',
		user: {
			id: 1,
			active: true,
			active_company: {
				id: 1,
				name: 'Test Company',
				created_at: new Date().toISOString(),
				default_currency: 'USD',
				settings: {
					primary_color: 'blue',
				},
				slug: 'test-company',
				updated_at: new Date().toISOString(),
			},
			active_company_id: 1,
			companies: [],
			email: 'test@example.com',
			people: [],
			person: {
				id: 1,
				active: true,
				first_name: 'Test',
				last_name: 'User',
				name: 'Test User',
				department_id: null,
				user_id: 1,
			},
			roles: [],
			table_preferences: {},
			user_preferences: {},
		},
	},
	url: '/',
	version: null,
}

vi.mock('@inertiajs/react', async () => {
	const actual = await vi.importActual('@inertiajs/react')
	return {
		...actual,
		usePage: () => ({
			component: undefined,
			props: mockPageProps,
			url: '/',
			version: null,
		}),
		router: {
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
		},
		Link: ({ children, ...props }: any) => React.createElement('a', props, children),
		Head: ({ children }: any) => React.createElement(React.Fragment, {}, children),
	}
})

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<Providers>{ children }</Providers>
	)
}

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export { customRender as render }
