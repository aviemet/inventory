import React, { useCallback } from 'react'
import { Link, Heading, Table, Box, Badge, Money } from '@/Components'
import { formatter, Routes } from '@/lib'
import { has } from 'lodash'

type TPathOption = 'item'|'person'|'location'

interface IItemDetailsProps {
	item: Schema.Item
}

const AssignmentLink = ({ assignment }: { assignment?: Schema.Assignment }) => {
	if(!assignment) return <></>

	const path = Routes[assignment.assign_toable_type.toLowerCase() as TPathOption]
	// @ts-ignore
	const param = has(assignment.assign_toable, 'slug') ? assignment.assign_toable.slug : assignment.assign_toable_id

	return <Link href={ path(param) }>{ assignment.assign_toable.name }</Link>
}

const ItemDetails = ({ item }: IItemDetailsProps) => {
	const itemAssignment = useCallback(() => {
		if(!item.assigned || !item.assignments) return

		return item.assignments.find(assignment => assignment.active)
	}, [item])

	return (
		<>
			<Heading order={ 3 }>Details</Heading>

			<Box sx={ theme => ({ maxWidth: `${theme.breakpoints.sm}` }) }>
				<Table>
					<Table.Body>

						<Table.Row>
							<Table.Cell>{ item.assigned ? 'Assigned To' : 'Status' }</Table.Cell>
							<Table.Cell>
								{ item.assigned ?
									<AssignmentLink assignment={ itemAssignment() } />
									:
									<Badge>{ item.status_label?.name }</Badge>
								}
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Serial</Table.Cell>
							<Table.Cell>{ item.serial }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Asset Tag</Table.Cell>
							<Table.Cell>{ item.asset_tag }</Table.Cell>
						</Table.Row>

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
							<Table.Cell>Vendor</Table.Cell>
							<Table.Cell>
								{ item.vendor && <Link href={ Routes.vendor(item.vendor.slug) }>
									{ item.vendor.name }
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
							<Table.Cell>Purchase Cost</Table.Cell>
							<Table.Cell>
								<Money accounting={ false } currency={ item.cost_currency }>{ item.cost }</Money>
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Purchase Date</Table.Cell>
							<Table.Cell>{ item.purchased_at && formatter.date.short(item.purchased_at) }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>IP Address</Table.Cell>
							<Table.Cell>{ item.nics?.filter(nic => (
								nic?.ips?.some(ip => ip.active && ip.address)
							)).map(nic => (
								nic?.ips?.map(ip => (
									<div key={ ip.address }>{ ip.address }</div>
								))
							)) }</Table.Cell>
						</Table.Row>

					</Table.Body>
				</Table>
			</Box>
		</>
	)
}

export default ItemDetails
