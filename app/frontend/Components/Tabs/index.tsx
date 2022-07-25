import React from 'react'
import { Tabs, type TabsProps } from '@mantine/core'
import UrlTabs from './UrlTabs'

interface ITabsComponentProps extends TabsProps {
	useUrlHash?: boolean
}

const TabsComponent = ({ children, useUrlHash = false, ...props }: ITabsComponentProps) => {
	return useUrlHash ?
		<UrlTabs { ...props }>{ children }</UrlTabs>
		:
		<Tabs { ...props }>{ children }</Tabs>
}

TabsComponent.Tab = Tabs.Tab

export default TabsComponent
