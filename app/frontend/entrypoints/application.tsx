import React from 'react'
import { createInertiaApp, router } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import { AuthLayout, AppLayout } from '../Layouts'
import { propsMiddleware } from './middleware'

type PagesObject = { default: React.ComponentType<any> & {
	layout?: React.ComponentType<any>
} }

const pages = import.meta.glob<PagesObject>('../Pages/**/index.tsx')

document.addEventListener('DOMContentLoaded', () => {
	const csrfToken = (document.querySelector('meta[name=csrf-token]') as HTMLMetaElement).content
	axios.defaults.headers.common['X-CSRF-Token'] = csrfToken

	createInertiaApp({
		title: title => `Inventory - ${title}`,

		resolve: async name => {
			let checkedName = name
			let layout = AppLayout

			if(name.startsWith('Public/')) {
				layout = AuthLayout
				checkedName = name.replace('Public/', '')
			}

			const page = (await pages[`../Pages/${checkedName}/index.tsx`]()).default

			if(page.layout === undefined) page.layout = layout

			return page
		},

		setup({ el, App, props }) {
			const root = createRoot(el)

			// Convert ISO strings from server to javascript Date objects
			props.initialPage.props = propsMiddleware(props.initialPage.props)

			root.render(<App { ...props } />)

			router.on('success', event => {
				event.detail.page.props = propsMiddleware(event.detail.page.props)
			})
		},
	})
})
