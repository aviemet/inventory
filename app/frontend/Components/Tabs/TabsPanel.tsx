import React from 'react'
import { Tabs, type TabsPanelProps } from '@mantine/core'

const TabsPanel = ({ children, value, ...props }: TabsPanelProps) => {
	const url = new URL(window.location.href)

	console.log({ tab: url.searchParams.get('tab'), value })

	return (
		<Tabs.Panel value={ value } { ...props }>
			{ url.searchParams.get('tab') === value && children }
		</Tabs.Panel>
	)
}

export default TabsPanel
