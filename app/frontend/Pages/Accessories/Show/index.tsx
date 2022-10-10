import React, { useCallback } from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Menu, Flex, Heading, Tabs } from '@/Components'
import { Routes } from '@/lib'
import { Tooltip } from '@mantine/core'
import { availableToCheckout } from '../utils'
import Details from './Details'
import History from './History'
import Associations from './Associations'

interface IShowAccessoryProps {
	accessory: Schema.Accessory
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}


const ShowAccessory = ({ accessory }: IShowAccessoryProps) => {
	const title = accessory.name ?? 'Accessory Details'


	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Flex>
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Item href={ Routes.checkoutAccessory(accessory) } disabled={ !useCallback((accessory: Schema.Accessory) => availableToCheckout(accessory), [accessory.qty, accessory.assignments]) }>
								{ !availableToCheckout(accessory) ?
									<Tooltip label="There are none in stock" position="left" withArrow><div>Checkout Accessory</div></Tooltip>
									:
									'Checkout Accessory'
								}
							</Menu.Item>
							<Menu.Item href={ Routes.editAccessory(accessory) }>
								Edit Accessory
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
						<Details accessory={ accessory } />
					</Tabs.Panel>

					<Tabs.Panel value="history">
						<History accessory={ accessory } />
					</Tabs.Panel>

					<Tabs.Panel value="associations">
						<Associations accessory={ accessory } />
					</Tabs.Panel>
				</Tabs>
			</Section>
		</>
	)
}

export default ShowAccessory
