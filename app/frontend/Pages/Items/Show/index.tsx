import React, { useCallback } from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Link, Menu, Flex, Heading, Tabs, Table, Box, History } from '@/Components'
import { formatter, Routes } from '@/lib'
import { EditIcon, CheckinIcon, CheckoutIcon } from '@/Components/Icons'

interface IShowItemProps {
	item: Schema.Item
}

const AssignmentLink = ({ assignment }: { assignment?: Schema.Assignment }) => {
	if(!assignment) return <></>

	// @ts-ignore
	const path = Routes[assignment.assign_toable_type.toLowerCase()]

	return <Link href={ path(assignment.assign_toable_id) }>{ assignment.assign_toable.name }</Link>
}

const Show = ({ item }: IShowItemProps) => {
	const title = item.name ?? 'Item Details'

	const itemAssignment = useCallback(() => {
		if(!item.assigned || !item.assignments) return

		return item.assignments.find(assignment => assignment.active)
	}, [item])

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Flex position="apart">
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu>
						{ item.assignments ?
							<Menu.Item href={ Routes.checkinItem(item) } icon={ <CheckinIcon /> }>
								Checkin Item
							</Menu.Item>
							:
							<Menu.Item href={ Routes.checkoutItem(item) } icon={ <CheckoutIcon /> }>
								Checkout Item
							</Menu.Item>
						}
						<Menu.Item href={ Routes.editItem(item) } icon={ <EditIcon /> }>
								Edit Item
						</Menu.Item>
					</Menu>
				</Flex>

				<Tabs>
					<Tabs.Tab label="Details">
						<Heading order={ 3 }>Details</Heading>

						<Box sx={ theme => ({
							maxWidth: `${theme.breakpoints.sm}px`
						}) }>

							<Table>
								<Table.Body>

									<Table.Row>
										<Table.Cell>Manufacturer</Table.Cell>
										<Table.Cell>
											{ item.manufacturer && <Link href={ Routes.manufacturer(item.manufacturer.slug) }>
												{ item.manufacturer!.name }
											</Link> }
										</Table.Cell>
									</Table.Row>

									<Table.Row>
										<Table.Cell>Model</Table.Cell>
										<Table.Cell>
											{ item.model && <Link href={ Routes.model(item.model.slug) }>
												{ item.model.name }
											</Link> }
										</Table.Cell>
									</Table.Row>

									<Table.Row>
										<Table.Cell>Category</Table.Cell>
										<Table.Cell>
											{ item.category && <Link href={ Routes.category(item.category.slug) }>
												{ item.category.name }
											</Link> }
										</Table.Cell>
									</Table.Row>

									<Table.Row>
										<Table.Cell>Serial</Table.Cell>
										<Table.Cell>{ item.serial }</Table.Cell>
									</Table.Row>

									<Table.Row>
										<Table.Cell>Assigned To</Table.Cell>
										<Table.Cell><AssignmentLink assignment={ itemAssignment() } /></Table.Cell>
									</Table.Row>

									<Table.Row>
										<Table.Cell>Asset Tag</Table.Cell>
										<Table.Cell>{ item.asset_tag }</Table.Cell>
									</Table.Row>

									<Table.Row>
										<Table.Cell>Purchase Cost</Table.Cell>
										<Table.Cell>{ item.cost && formatter.currency(item.cost, item.cost_currency) }</Table.Cell>
									</Table.Row>

									<Table.Row>
										<Table.Cell>Purchase Date</Table.Cell>
										<Table.Cell>{ item.purchased_at && formatter.date.short(item.purchased_at) }</Table.Cell>
									</Table.Row>

									<Table.Row>
										<Table.Cell>Vendor</Table.Cell>
										<Table.Cell>
											{ item.vendor && <Link href={ Routes.vendor(item.vendor.slug) }>
												{ item.vendor.name }
											</Link> }
										</Table.Cell>
									</Table.Row>
								</Table.Body>
							</Table>
						</Box>
					</Tabs.Tab>

					<Tabs.Tab label="History">
						<Heading order={ 3 }>History</Heading>

						<History assignments={ item.assignments } audits={ item.audits } />

					</Tabs.Tab>

					<Tabs.Tab label="Associations">
						<Heading order={ 3 }>Licenses</Heading>

						<ul>
							{ item.licenses && item.licenses.map(license => (
								<li key={ license.id }>{ license.name }</li>
							)) }
						</ul>

					</Tabs.Tab>
				</Tabs>


			</Section>
		</>
	)
}

export default Show
