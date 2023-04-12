import React from 'react'
import { Section, Menu, Flex, Heading, Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import { Tooltip } from '@mantine/core'
import Details from './Details'
import History from './History'
import Associations from './Associations'

export interface IShowConsumableProps {
	consumable: Schema.ConsumablesShow
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

const ShowConsumable = ({ consumable }: IShowConsumableProps) => {
	const title = consumable.name ?? 'Consumable Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Consumables', href: Routes.consumables() },
			{ title: consumable.name! },
		] }>
			<Section>
				<Flex>
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link
								href={ Routes.checkoutConsumable(consumable) }
								disabled={ consumable.qty_available < 1 }
							>
								{ consumable.qty_available < 1 ?
									<Tooltip label="There are none in stock" position="left" withArrow><div>Checkout Consumable</div></Tooltip>
									:
									'Checkout Consumable'
								}
							</Menu.Link>
							<Menu.Link href={ Routes.editConsumable(consumable) }>
								Edit Consumable
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
						<Details consumable={ consumable } />
					</Tabs.Panel>

					<Tabs.Panel value="history">
						<History consumable={ consumable } />
					</Tabs.Panel>

					<Tabs.Panel value="associations">
						<Associations consumable={ consumable } />
					</Tabs.Panel>
				</Tabs>

			</Section>
		</Page>
	)
}

export default ShowConsumable
