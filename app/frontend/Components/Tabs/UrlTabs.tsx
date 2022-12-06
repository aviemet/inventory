import React, { useEffect, useCallback } from 'react'
import { Tabs, type TabsValue, type TabsProps } from '@mantine/core'
import { Inertia, type VisitOptions } from '@inertiajs/inertia'

const UrlTabs = ({ children, onTabChange, defaultValue, ...props }: TabsProps) => {
	const activeTab = useCallback(() => {
		const url = new URL(window.location.href)
		return url.searchParams.get('tab')
	}, [window.location.href])

	// useEffect(() => {
	// 	if(!activeTab() && defaultValue) {
	// 		// Without { replace:true } the back button will not work as expceted
	// 		navigateTab(defaultValue, { replace:true })
	// 	}
	// }, [])

	const navigateTab = (value: TabsValue, options?: VisitOptions) => {
		const url = new URL(window.location.href)

		Inertia.get(url.pathname, { tab: value }, Object.assign({
			preserveState: true,
			preserveScroll: true,
			only: [value],
		}, options || {}))
	}

	const handleTabChange = (value: TabsValue) => {
		navigateTab(value)

		if(onTabChange) onTabChange(value)
	}

	return (
		<Tabs
			defaultValue={ activeTab() || defaultValue }
			keepMounted={ false }
			allowTabDeactivation={ true }
			onTabChange={ handleTabChange }
			{ ...props }
		>
			{ children }
		</Tabs>
	)
}

export default UrlTabs
