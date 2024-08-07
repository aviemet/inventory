import React from 'react'
import { Section, Menu, Group, Title, Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import {
	EditIcon,
	CheckinIcon,
	CheckoutIcon,
	TicketsIcon,
	DocumentationIcon,
} from '@/Components/Icons'
import Details from './Details'
import ItemHistory from './ItemHistory'
import Associations from './Associations'
import Documentations from './Documentations'

export interface ShowItemProps {
	item: Schema.ItemsShow
}

const tabsList = [
	{ id: 'details', label: 'Details', component: Details },
	{ id: 'history', label: 'History', component: ItemHistory },
	{ id: 'documentations', label: 'Documentation', component: Documentations },
	{ id: 'associations', label: 'Associations', component: Associations },
]

const ShowItem = ({ item }: ShowItemProps) => {
	const title = item.name ?? 'Item Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Hardware', href: Routes.items() },
			{ title: item.name, href: window.location.href },
		] }>
			<Section fullHeight>
				<Group justify="space-between">
					<Title style={ { flex: 1 } }>{ title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							{ item.assigned ?
								<Menu.Link href={ Routes.checkinItem(item) } leftSection={ <CheckinIcon /> }>
								Checkin Item
								</Menu.Link>
								:
								<Menu.Link href={ Routes.checkoutItem(item) } leftSection={ <CheckoutIcon /> }>
								Checkout Item
								</Menu.Link>
							}
							<Menu.Link href={ Routes.editItem(item) } leftSection={ <EditIcon /> }>
								Edit Item
							</Menu.Link>

							<Menu.Divider />

							<Menu.Link href={ Routes.newTicket({ 'ticket.asset_id': item.id }) } leftSection={ <TicketsIcon /> }>
								Open New Ticket
							</Menu.Link>
							<Menu.Link href={ Routes.newDocumentation({ 'documentation.documentable_type': 'Item', 'documentation.documentable_id': item.id }) } leftSection={ <DocumentationIcon /> }>
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
