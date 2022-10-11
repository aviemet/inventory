import React, { useCallback } from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Menu, Flex, Heading, Tabs } from '@/Components'
import { Routes } from '@/lib'
import { Tooltip } from '@mantine/core'
import { availableToCheckout } from '../utils'
import Details from './Details'
import History from './History'
import Associations from './Associations'

interface IShowComponentProps {
	component: Schema.Component
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

const ShowComponent = ({ component }: IShowComponentProps) => {
	const title = component.name ?? 'Component Details'

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Flex>
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Item
								href={ Routes.checkoutComponent(component) }
								disabled={ !useCallback((component: Schema.Component) => availableToCheckout(component), [component.qty, component.assignments]) }
							>
								{ !availableToCheckout(component) ?
									<Tooltip label="There are none in stock" position="left" withArrow><div>Checkout Component</div></Tooltip>
									:
									'Checkout Component'
								}
							</Menu.Item>
							<Menu.Item href={ Routes.editComponent(component) }>
								Edit Component
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Flex>

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
		</>
	)
}

export default ShowComponent
