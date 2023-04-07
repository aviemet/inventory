import React from 'react'
import { Section, Menu, Group, Heading, Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import { EditIcon, CheckinIcon, CheckoutIcon, TicketsIcon } from '@/Components/Icons'
import Details from './Details'
import ItemHistory from './ItemHistory'
import Associations from './Associations'

interface IShowItemProps {
	item: Schema.Item
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

const ShowItem = ({ item }: IShowItemProps) => {
	const title = item.name ?? 'Item Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Hardware', href: Routes.items() },
			{ title: item.name! },
		] }>
			<Section>
				<Group position="apart">
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							{ item.assigned ?
								<Menu.Link href={ Routes.checkinItem(item) } icon={ <CheckinIcon /> }>
								Checkin Item
								</Menu.Link>
								:
								<Menu.Link href={ Routes.checkoutItem(item) } icon={ <CheckoutIcon /> }>
								Checkout Item
								</Menu.Link>
							}
							<Menu.Link href={ Routes.editItem(item) } icon={ <EditIcon /> }>
								Edit Item
							</Menu.Link>

							<Menu.Divider />

							<Menu.Link href={ Routes.newTicket({ 'ticket.asset_id': item.id }) } icon={ <TicketsIcon /> }>Open New Ticket</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

				<Tabs urlControlled={ true } defaultValue={ tabs.details }>
					<Tabs.List>
						<Tabs.Tab value={ tabs.details }>Details</Tabs.Tab>
						<Tabs.Tab value={ tabs.history }>History</Tabs.Tab>
						<Tabs.Tab value={ tabs.associations }>Associations</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value={ tabs.details }>
						<Details item={ item } />
					</Tabs.Panel>

					<Tabs.Panel value={ tabs.history }>
						<ItemHistory item={ item } />
					</Tabs.Panel>

					<Tabs.Panel value={ tabs.associations }>
						<Associations item={ item } />
					</Tabs.Panel>
				</Tabs>

			</Section>
		</Page>
	)
}

export default ShowItem
