import React from 'react'
import { Section, Menu, Group, Title, Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import { Tooltip } from '@mantine/core'
import Details from './Details'
import History from './History'
import Associations from './Associations'
import Documentations from './Documentations'

export interface ShowComponentProps {
	component: Schema.ComponentsShow
}

const tabsList = [
	{ id: 'details', label: 'Details', component: Details },
	{ id: 'history', label: 'History', component: History },
	{ id: 'documentations', label: 'Documentation', component: Documentations },
	{ id: 'associations', label: 'Associations', component: Associations },
]

const ShowComponent = ({ component }: ShowComponentProps) => {
	const title = component.name ?? 'Component Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Components', href: Routes.components() },
			{ title: component.name, href: window.location.href },
		] }>
			<Section>
				<Group justify="space-between">
					<Title>{ title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link
								href={ Routes.checkoutComponent(component) }
								disabled={ component.qty_available < 1 }
							>
								{ component.qty_available < 1 ?
									<Tooltip label="There are none in stock" position="left" withArrow><div>Checkout Component</div></Tooltip>
									:
									'Checkout Component'
								}
							</Menu.Link>
							<Menu.Link href={ Routes.editComponent(component) }>
								Edit Component
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

				<Tabs urlControlled={ true } defaultValue={ tabsList[0].id }>
					<Tabs.List>
						{ tabsList.map(tab => (
							<Tabs.Tab key={ tab.id } value={ tab.id }>{ tab.label }</Tabs.Tab>
						)) }
					</Tabs.List>

					{ tabsList.map(tab => {
						const Component = tab.component

						return (
							<Tabs.Panel key={ tab.id } value={ tab.id } p="md">
								<Component component={ component } />
							</Tabs.Panel>
						)
					}) }
				</Tabs>
			</Section>
		</Page>
	)
}

export default ShowComponent
