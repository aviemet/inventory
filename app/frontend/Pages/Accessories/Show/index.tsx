import React, { useCallback } from 'react'
import { Section, Menu, Flex, Heading, Tabs, Tooltip, Page } from '@/Components'
import { Routes } from '@/lib'
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
		<Page title={ title } breadcrumbs={ [
			{ title: 'Accessories', href: Routes.accessories() },
			{ title: accessory.name! },
		] }>

			<Section>
				<Flex>
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link
								href={ Routes.checkoutAccessory(accessory) }
								disabled={ !useCallback((accessory: Schema.Accessory) => accessory.available_to_checkout, [accessory.qty, accessory.assignments]) }
							>
								{ !accessory.available_to_checkout ?
									<Tooltip label="There are none in stock" position="left" withArrow><div>Checkout Accessory</div></Tooltip>
									:
									'Checkout Accessory'
								}
							</Menu.Link>
							<Menu.Link href={ Routes.editAccessory(accessory) }>
								Edit Accessory
							</Menu.Link>
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
		</Page>
	)
}

export default ShowAccessory
