import React from 'react'
import { Heading, Page, Section, Tabs } from '@/Components'
// import { Tabs } from '@mantine/core'
import General from './General'
import Ldap from './Ldap'
import Appearance from './Appearance'

type TTab = {
	name: string
	label: string
	component: React.ReactNode
	icon?: React.ReactNode
}

const tabs: TTab[] = [
	{ name: 'general', label: 'General', component: <General /> },
	{ name: 'appearance', label: 'Appearance', component: <Appearance /> },
	{ name: 'localization', label: 'Localization', component: <General /> },
	{ name: 'notifications', label: 'Notifications', component: <General /> },
	// { name: 'integrations', label: 'Integrations', component: <General /> },
	{ name: 'assetTags', label: 'Asset Tags', component: <General /> },
	{ name: 'barcodes', label: 'Barcodes', component: <General /> },
	{ name: 'ldap', label: 'LDAP', component: <Ldap /> },
	{ name: 'backups', label: 'Backups', component: <General /> },
	{ name: 'logs', label: 'Logs', component: <General /> },
]

const Settings = () => {
	const title = 'Settings'

	return (
		<Page title={ title }>
			<Section fullHeight>
				<Heading>{ title }</Heading>

				<hr></hr>

				<Tabs
					orientation="vertical"
					variant="pills"
					defaultValue={ tabs[0].name }
					urlControlled
					dependencies={ {
						ldap: 'ldap',
					} }
				>
					<Tabs.List>{ tabs.map(tab => (
						<Tabs.Tab key={ tab.name } value={ tab.name }>{ tab.label }</Tabs.Tab>
					)) }</Tabs.List>

					{ tabs.map(tab => (
						<Tabs.Panel key={ tab.name } value={ tab.name } pl="sm">{ tab.component }</Tabs.Panel>
					)) }
				</Tabs>
			</Section>
		</Page>
	)
}

export default Settings
