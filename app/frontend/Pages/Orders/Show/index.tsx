import React from 'react'
import { Section, Menu, Group, Heading, Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import { EditIcon } from '@/Components/Icons'

interface ShowOrderProps {
	order: Schema.OrdersShow
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

const Show = ({ order }: ShowOrderProps) => {
	const title = 'Order Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Order', href: Routes.orders() },
			{ title: String(order.id), href: window.location.href },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editOrder(order) } leftSection={ <EditIcon /> }>
								Edit Order
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
						Details
					</Tabs.Panel>

					<Tabs.Panel value="history">
						History
					</Tabs.Panel>

					<Tabs.Panel value="associations">
						Associations
					</Tabs.Panel>
				</Tabs>

			</Section>
		</Page>
	)
}

export default Show
