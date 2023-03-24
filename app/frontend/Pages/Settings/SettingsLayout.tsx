import React, { useCallback } from 'react'
import { Heading, Page, Section, Tabs } from '@/Components'
import { router, usePage } from '@inertiajs/react'

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

	return (
		<Page title={ title }>
			<Section fullHeight>
				<Heading>{ title }</Heading>

				<Section sx={ { height: '100%' } }>
					<Tabs
						orientation="vertical"
						variant="pills"
						defaultValue={ page.url.replace('/settings/', '') }
						onTabChange={ value => {
							router.get(`/settings/${value}`)
						} }
					>
						<Tabs.List>{ tabs.map(tab => (
							<Tabs.Tab key={ tab.name } value={ tab.name }>{ tab.label }</Tabs.Tab>
						)) }</Tabs.List>

						{ tabs.map(tab => (
							<Tabs.Panel key={ tab.name } value={ tab.name } pl="sm">
								{ children }
							</Tabs.Panel>
						)) }
					</Tabs>
				</Section>
			</Section>
		</Page>
	)
}

export default SettingsLayout
