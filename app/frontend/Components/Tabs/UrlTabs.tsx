import React, { useEffect, useState } from 'react'
import { Tabs, type TabsProps } from '@mantine/core'
import { Inertia } from '@inertiajs/inertia'

const UrlTabs = ({ children, onTabChange, ...props }: TabsProps) => {
	const [activeTab, setActiveTab] = useState(0)
	const url = new URL(window.location.href)

	useEffect(() => {
		if(!Array.isArray(children)) return

		let index = 0
		if(url.searchParams.has('tab')) {
			index = children!.findIndex(child => child.props.tabKey === url.searchParams.get('tab'))
		}

		setActiveTab(index)
	}, [window.location.href])

	const handleTabChange = (i: number, key: string) => {
		const options: { tab?: string } = {}

		if(i > 0) {
			options.tab = key
		}

		Inertia.get(url.pathname, options, {
			preserveState: true,
			preserveScroll: true,
		})

		if(onTabChange) onTabChange(i, key)
	}

	return (
		<Tabs
			onTabChange={ handleTabChange }
			active={ activeTab }
			{ ...props }
		>
			{ children }
		</Tabs>
	)
}

UrlTabs.Tab = Tabs.Tab

export default UrlTabs
