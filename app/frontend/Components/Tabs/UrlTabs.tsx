import React from 'react'
import { Tabs, TabsValue, type TabsProps } from '@mantine/core'
import { Inertia } from '@inertiajs/inertia'

const UrlTabs = ({ children, onTabChange, defaultValue, ...props }: TabsProps) => {
	const url = new URL(window.location.href)

	const handleTabChange = (value: TabsValue) => {
		Inertia.get(url.pathname, { tab: value }, {
			preserveState: true,
			preserveScroll: true,
		})

		if(onTabChange) onTabChange(value)
	}

	return (
		<Tabs
			onTabChange={ handleTabChange }
			value={ url.searchParams.get('tab') || defaultValue }
			{ ...props }
		>
			{ children }
		</Tabs>
	)
}

UrlTabs.Tab = Tabs.Tab

export default UrlTabs
