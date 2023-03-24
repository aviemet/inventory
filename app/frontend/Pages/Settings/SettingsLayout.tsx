import React from 'react'
import { Heading, Page, Section, Tabs } from '@/Components'
import { router, usePage } from '@inertiajs/react'
import { TabsValue } from '@mantine/core'

type TTab = {
	name: string
	label: string
	icon?: React.ReactNode
}

const tabs: TTab[] = [
	{ name: 'general', label: 'General' },
	{ name: 'appearance', label: 'Appearance' },
	{ name: 'localization', label: 'Localization' },
	{ name: 'notifications', label: 'Notifications' },
	// { name: 'integrations', label: 'Integrations' },
	{ name: 'asset_tags', label: 'Asset Tags' },
	{ name: 'barcodes', label: 'Barcodes' },
	{ name: 'ldap', label: 'LDAP' },
	{ name: 'backups', label: 'Backups' },
	{ name: 'logs', label: 'Logs' },
]
const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
	const title = 'Settings'
	const page = usePage()

	const handleTabChange = (value: TabsValue) => {
		router.get(`/settings/${value}`)
	}

	return (
		<Page title={ title }>
			<Section fullHeight>
				<Heading mb={ 24 }>{ title }</Heading>

				<Tabs
					orientation="vertical"
					variant="pills"
					defaultValue={ page.url.replace('/settings/', '') }
					onTabChange={ handleTabChange }
				>
					<Tabs.List>{ tabs.map(tab => (
						<Tabs.Tab key={ tab.name } value={ tab.name }>{ tab.label }</Tabs.Tab>
					)) }</Tabs.List>

					{ tabs.map(tab => (
						<Tabs.Panel key={ tab.name } value={ tab.name } pl="xs">
							<Section sx={ { height: '100%' } }>
								{ children }
							</Section>
						</Tabs.Panel>
					)) }
				</Tabs>
			</Section>
		</Page>
	)
}

export default SettingsLayout
