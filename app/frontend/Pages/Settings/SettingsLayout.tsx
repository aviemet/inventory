import React, { useEffect, useState } from 'react'
import { Page, Box, Section, Tabs } from '@/Components'
import { router, usePage } from '@inertiajs/react'
import { Paper, TabsValue, px, useMantineTheme } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'

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

	const { width } = useViewportSize()
	const theme = useMantineTheme()
	const [mobileFormat, setMobileFormat] = useState(window.innerWidth < px(theme.breakpoints.sm))

	useEffect(() => {
		if(width === 0) return
		setMobileFormat(width < px(theme.breakpoints.sm))
	}, [width])

	const handleTabChange = (value: TabsValue) => {
		router.get(`/settings/${value}`, {}, { preserveState: true })
	}

	return (
		<Page title={ title }>
			<Section sx={ { height: '100%' } }>
				<Tabs
					orientation={ mobileFormat ? 'horizontal' : 'vertical' }
					variant="pills"
					defaultValue={ page.url.replace('/settings/', '') }
					onTabChange={ handleTabChange }
					sx={ { height: '100%' } }
				>
					<Paper
						p='xs'
						withBorder
						shadow="sm"
					>
						<Tabs.List sx={ mobileFormat ? {
							flexWrap: 'nowrap',
							overflow: 'auto',
						} : {} }>{ tabs.map(tab => (
								<Tabs.Tab key={ tab.name } value={ tab.name } role="link">{ tab.label }</Tabs.Tab>
							)) }</Tabs.List>
					</Paper>
					{ tabs.map(tab => (
						<Tabs.Panel key={ tab.name } value={ tab.name } pl="xs" sx={ { position: 'relative' } }>

							<Box
								p='lg'
								sx={ {
									height: '100%',
								} }
							>
								{ children }
							</Box>
						</Tabs.Panel>
					)) }
				</Tabs>
			</Section>
		</Page>
	)
}

export default React.memo(SettingsLayout)
