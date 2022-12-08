import React, { useEffect, useCallback } from 'react'
import { Tabs, type TabsValue } from '@mantine/core'
import { Inertia, type VisitOptions } from '@inertiajs/inertia'
import { ITabsComponentProps } from '.'
import { coerceArray } from '@/lib'

const UrlTabs = ({ children, onTabChange, defaultValue, dependencies, ...props }: ITabsComponentProps) => {
	const navigateTab = (value: TabsValue, options?: VisitOptions) => {
		let only: string[] = []
		if(value && dependencies?.[value]) {
			only = coerceArray(dependencies[value])
		}

		Inertia.reload(Object.assign({
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

	const navigateActiveTab = () => navigateTab(activeTab())

	// Handle direct navigation to tabbed page
	useEffect(() => {
		if(!activeTab() && defaultValue) {
			navigateTab(defaultValue, { replace: true })
		} else {
			document.addEventListener('inertia:navigate', navigateActiveTab, { once: true })
		}

		// @ts-ignore
		return document.removeEventListener('inertia:navigate', navigateActiveTab, { once: true })
	}, [])

	const handleTabChange = (value: TabsValue) => {
		navigateTab(value)

		if(onTabChange) onTabChange(value)
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
