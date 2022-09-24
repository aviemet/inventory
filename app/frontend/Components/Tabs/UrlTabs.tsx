import React, { useEffect } from 'react'
import { Tabs, TabsValue, type TabsProps } from '@mantine/core'
import { Inertia, type VisitOptions } from '@inertiajs/inertia'

const UrlTabs = ({ children, onTabChange, defaultValue, ...props }: TabsProps) => {
	const url = new URL(window.location.href)

	useEffect(() => {
		if(!url.searchParams.get('tab') && defaultValue) {
			// Without { replace:true } the back button will not work as expceted
			navigateTab(defaultValue, { replace: true })
		}
	}, [])

	const navigateTab = (value: TabsValue, options?: VisitOptions) => {
		Inertia.get(url.pathname, { tab: value }, Object.assign({
			preserveState: true,
			preserveScroll: true,
		}, options || {}))
	}

	const handleTabChange = (value: TabsValue) => {
		navigateTab(value)

		if(onTabChange) onTabChange(value)
	}

	return (
		<Tabs
			onTabChange={ handleTabChange }
			value={ url.searchParams.get('tab') ?? defaultValue }
			{ ...props }
		>
			{ children }
		</Tabs>
	)
}

export default UrlTabs
