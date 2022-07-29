import React, { useEffect } from 'react'
import { Tabs, TabsValue, type TabsProps } from '@mantine/core'
import { Inertia } from '@inertiajs/inertia'

const UrlTabs = ({ children, onTabChange, defaultValue, ...props }: TabsProps) => {
	const url = new URL(window.location.href)

	useEffect(() => {
		if(!url.searchParams.get('tab') && defaultValue) {
			navigateTab(defaultValue)
		}
	}, [])

	const navigateTab = (value: TabsValue) => {
		Inertia.get(url.pathname, { tab: value }, {
			preserveState: true,
			preserveScroll: true,
		})
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
