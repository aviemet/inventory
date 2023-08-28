import React from 'react'
import { Section, Menu, Group, Heading, Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import { EditIcon, CheckinIcon, CheckoutIcon, TicketsIcon, DocumentationIcon } from '@/Components/Icons'
import Details from './Details'
import ItemHistory from './ItemHistory'
import Associations from './Associations'
import Documentations from './Documentations'

export interface IShowItemProps {
	item: Schema.ItemsShow
}

const tabsList = [
	{ id: 'details', label: 'Details', component: Details },
	{ id: 'history', label: 'History', component: ItemHistory },
	{ id: 'documentations', label: 'Documentation', component: Documentations },
	{ id: 'associations', label: 'Associations', component: Associations },
]

const ShowItem = ({ item }: IShowItemProps) => {
	const title = item.name ?? 'Item Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Hardware', href: Routes.items() },
			{ title: item.name! },
		] }>
			<Section fullHeight>
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

							<Menu.Link href={ Routes.newTicket({ 'ticket.asset_id': item.id }) } icon={ <TicketsIcon /> }>
								Open New Ticket
							</Menu.Link>
							<Menu.Link href={ Routes.newDocumentation({ 'documentation.documentable_type': 'Item', 'documentation.documentable_id': item.id }) } icon={ <DocumentationIcon /> }>
								New Documentation
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
								<Component item={ item } />
							</Tabs.Panel>
						)
					}) }
				</Tabs>
			</Section>
		</Page>
	)
}

export default ShowItem
