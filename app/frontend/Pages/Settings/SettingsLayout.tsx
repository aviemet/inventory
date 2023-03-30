import React from 'react'
import { Heading, Page, Box, Section, Tabs } from '@/Components'
import { router, usePage } from '@inertiajs/react'
import { Paper, TabsValue } from '@mantine/core'

type TTab = {
	name: string
	label: string
	icon?: React.ReactNode
}

const tabs: TTab[] = [
	{ name: 'general', label: 'General' },
	{ name: 'appearance', label: 'Appearance' },
	{ name: 'notifications', label: 'Notifications' },
	// { name: 'integrations', label: 'Integrations' },
	{ name: 'asset_tags', label: 'Asset Tags' },
	// { name: 'barcodes', label: 'Barcodes' },
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
			<Section sx={ { height: '100%' } }>
				<Tabs
					orientation="vertical"
					variant="pills"
					defaultValue={ page.url.replace('/settings/', '') }
					onTabChange={ handleTabChange }
					sx={ { height: '100%' } }
				>
					<Tabs.List>{ tabs.map(tab => (
						<Tabs.Tab key={ tab.name } value={ tab.name } role="link">{ tab.label }</Tabs.Tab>
					)) }</Tabs.List>

					{ tabs.map(tab => (
						<Tabs.Panel key={ tab.name } value={ tab.name } pl="xs" sx={ { position: 'relative' } }>

							<Paper
								component="section"
								p='lg'
								withBorder
								shadow="sm"
								sx={ {
									height: '100%',
								} }
							>
								{ children }
							</Paper>
						</Tabs.Panel>
					)) }
				</Tabs>
			</Section>
		</Page>
	)
}

export default SettingsLayout
