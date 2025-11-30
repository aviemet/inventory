import { Tabs, type TabsProps } from "@mantine/core"

import { TabsList } from "./TabsList"
import { UrlTabs } from "./UrlTabs"

export interface TabsComponentProps extends TabsProps {
	urlControlled?: boolean
	dependencies?: Record<string, string | string[]>
}

const TabsComponentBase = ({ children, urlControlled = false, ...props }: TabsComponentProps) => {
	return urlControlled ?
		<UrlTabs { ...props }>{ children }</UrlTabs>
		:
		<Tabs { ...props }>{ children }</Tabs>
}

export const TabsComponent = Object.assign(TabsComponentBase, {
	List: TabsList,
	Tab: Tabs.Tab,
	Panel: Tabs.Panel,
})
