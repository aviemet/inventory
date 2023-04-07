import React, { useEffect, useCallback } from 'react'
import { Tabs, type TabsValue } from '@mantine/core'
import { type VisitOptions } from '@inertiajs/core'
import { router } from '@inertiajs/react'
import { ITabsComponentProps } from '.'
import { coerceArray } from '@/lib'

const UrlTabs = ({ children, onTabChange, defaultValue, dependencies, ...props }: ITabsComponentProps) => {
	const navigateTab = (value: TabsValue, options?: VisitOptions) => {
		let only: string[] = []
		if(value && dependencies?.[value]) {
			only = coerceArray(dependencies[value])
		}

		router.reload(Object.assign({
			preserveState: true,
			preserveScroll: true,
			data: { tab: value },
			only,
		}, options || {}))
	}

	const activeTab = useCallback(() => {
		const url = new URL(window.location.href)
		return url.searchParams.get('tab')
	}, [window.location.href])


	// Handle direct navigation to tabbed page
	useEffect(() => {
		if(!activeTab() && defaultValue) {
			navigateTab(defaultValue, { replace: true })
		} else {
			document.addEventListener('inertia:navigate', function reloadActiveTab() {
				navigateTab(activeTab())
				document.removeEventListener('inertia:navigate', reloadActiveTab)
			})
		}
	}, [])

	const handleTabChange = (value?: TabsValue) => {
		navigateTab(value || activeTab())

		if(onTabChange) onTabChange(value || activeTab())
	}

	return (
		<Tabs
			defaultValue={ activeTab() || defaultValue }
			keepMounted={ false }
			onTabChange={ handleTabChange }
			{ ...props }
		>
			{ children }
		</Tabs>
	)
}

export default UrlTabs
