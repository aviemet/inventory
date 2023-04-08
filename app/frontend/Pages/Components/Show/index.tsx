import React from 'react'
import { Section, Menu, Group, Heading, Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import { Tooltip } from '@mantine/core'
import Details from './Details'
import History from './History'
import Associations from './Associations'

export interface IShowComponentProps {
	component: Schema.ComponentsShow
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

const ShowComponent = ({ component }: IShowComponentProps) => {
	const title = component.name ?? 'Component Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Components', href: Routes.components() },
			{ title: component.name! },
		] }>
			<Section>
				<Group position="apart">
					<Heading>{ title }</Heading>

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

				<Tabs urlControlled={ true } defaultValue={ tabs.details }>
					<Tabs.List>
						<Tabs.Tab value={ tabs.details }>Details</Tabs.Tab>
						<Tabs.Tab value={ tabs.history }>History</Tabs.Tab>
						<Tabs.Tab value={ tabs.associations }>Associations</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value="details">
						<Details component={ component } />
					</Tabs.Panel>

					<Tabs.Panel value="history">
						<History component={ component } />
					</Tabs.Panel>

					<Tabs.Panel value="associations">
						<Associations component={ component } />
					</Tabs.Panel>
				</Tabs>
			</Section>
		</Page>
	)
}

export default ShowComponent
