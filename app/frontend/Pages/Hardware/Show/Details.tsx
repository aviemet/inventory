import React, { useCallback } from 'react'
import { Link, Heading, Table, Box, Badge } from '@/Components'
import { formatter, Routes } from '@/lib'

interface IHardwareDetailsProps {
	hardware: Schema.Hardware
}

const AssignmentLink = ({ assignment }: { assignment?: Schema.Assignment }) => {
	if(!assignment) return <></>

	// @ts-ignore
	const path = Routes[assignment.assign_toable_type.toLowerCase()]

	return <Link href={ path(assignment.assign_toable_id) }>{ assignment.assign_toable.name }</Link>
}

const HardwareDetails = ({ hardware }: IHardwareDetailsProps) => {
	const hardwareAssignment = useCallback(() => {
		if(!hardware.assigned || !hardware.assignments) return

		return hardware.assignments.find(assignment => assignment.active)
	}, [hardware])

	return (
		<>
			<Heading order={ 3 }>Details</Heading>

			<Box sx={ theme => ({
				maxWidth: `${theme.breakpoints.sm}px`
			}) }>

				<Table>
					<Table.Body>

						<Table.Row>
							<Table.Cell>{ hardware.assigned ? 'Assigned To' : 'Status' }</Table.Cell>
							<Table.Cell>
								{ hardware.assigned ?
									<AssignmentLink assignment={ hardwareAssignment() } />
									:
									<Badge>{ hardware.status_type?.name }</Badge>
								}
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Serial</Table.Cell>
							<Table.Cell>{ hardware.serial }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Asset Tag</Table.Cell>
							<Table.Cell>{ hardware.asset_tag }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Manufacturer</Table.Cell>
							<Table.Cell>
								{ hardware.manufacturer && <Link href={ Routes.manufacturer(hardware.manufacturer.slug) }>
									{ hardware.manufacturer!.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Model</Table.Cell>
							<Table.Cell>
								{ hardware.model && <Link href={ Routes.model(hardware.model.slug) }>
									{ hardware.model.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Vendor</Table.Cell>
							<Table.Cell>
								{ hardware.vendor && <Link href={ Routes.vendor(hardware.vendor.slug) }>
									{ hardware.vendor.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Category</Table.Cell>
							<Table.Cell>
								{ hardware.category && <Link href={ Routes.category(hardware.category.slug) }>
									{ hardware.category.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Purchase Cost</Table.Cell>
							<Table.Cell>{ hardware.cost && formatter.currency(hardware.cost, hardware.cost_currency) }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Purchase Date</Table.Cell>
							<Table.Cell>{ hardware.purchased_at && formatter.date.short(hardware.purchased_at) }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>IP Address</Table.Cell>
							<Table.Cell>{ hardware.nics?.filter(nic => (
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

export default HardwareDetails
