import React, { useEffect, useState } from 'react'
import { Tabs, type TabsProps } from '@mantine/core'

const UrlTabs = ({ children, onTabChange, ...props }: TabsProps) => {
	const [activeTab, setActiveTab] = useState(0)

	useEffect(() => {
		if(!Array.isArray(children) || window.location.hash === '') return
		const index = children!.findIndex(child => `#${child.props.tabKey}` === window.location.hash)

		if(index >= 0) setActiveTab(index)
	}, [])

	const handleTabChange = (i: number, key: string) => {
		window.location.hash = i === 0 ? '' : key
		setActiveTab(i)

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
