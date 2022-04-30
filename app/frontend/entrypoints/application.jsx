import { createInertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import { InertiaProgress } from '@inertiajs/progress'
import { AuthLayout, AppLayout } from '../Layouts'
import dynamicImport from '../dynamicImport'

import '@/css/tailwind.css'

document.addEventListener('DOMContentLoaded', () => {
	const csrfToken = document.querySelector('meta[name=csrf-token]').content
	axios.defaults.headers.common['X-CSRF-Token'] = csrfToken

	InertiaProgress.init()

	createInertiaApp({
		title: title => `Inventory - ${title}`,
		resolve: async name => {
			let checkedName = name
			let layout = AppLayout
			if(name.startsWith('Public/')) {
				layout = AuthLayout
				checkedName = name.replace('Public/', '')
			}

			const page = await dynamicImport(checkedName)

			if(page.layout === undefined) page.layout = layout

			return page
		},
		setup({ el, App, props }) {
			const root = createRoot(el)
			root.render(<App { ...props } />)
		},
	})
})
