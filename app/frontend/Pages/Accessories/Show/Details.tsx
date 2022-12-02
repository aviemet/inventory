import React from 'react'
import { Link, Heading, Table, Box } from '@/Components'
import { formatter, Routes } from '@/lib'

interface IAccessoryDetailsProps {
	accessory: Schema.Accessory
}

const AccessoryDetails = ({ accessory }: IAccessoryDetailsProps) => {
	return (
		<>
			<Heading order={ 3 }>Details</Heading>

			<Box sx={ theme => ({
				maxWidth: `${theme.breakpoints.sm}px`,
			}) }>

				<Table>
					<Table.Body>

						{ accessory.qty && <Table.Row>
							<Table.Cell>Quantity</Table.Cell>
							<Table.Cell>{ accessory.qty }</Table.Cell>
						</Table.Row> }

						{ accessory.qty && accessory.assignments && <Table.Row>
							<Table.Cell>Available</Table.Cell>
							<Table.Cell>{ accessory.qty - accessory.assignments.reduce((sum, assignment) => sum += assignment.active ? 1 : 0, 0) }</Table.Cell>
						</Table.Row> }

						<Table.Row>
							<Table.Cell>Model</Table.Cell>
							<Table.Cell>
								{ accessory.model && <Link href={ Routes.model(accessory.model.slug) }>
									{ accessory.model.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Manufacturer</Table.Cell>
							<Table.Cell>
								{ accessory.manufacturer && <Link href={ Routes.manufacturer(accessory.manufacturer.slug) }>
									{ accessory.manufacturer!.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Category</Table.Cell>
							<Table.Cell>
								{ accessory.category && <Link href={ Routes.category(accessory.category.slug) }>
									{ accessory.category.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Serial</Table.Cell>
							<Table.Cell>{ accessory.serial }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Asset Tag</Table.Cell>
							<Table.Cell>{ accessory.asset_tag }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Purchase Cost</Table.Cell>
							<Table.Cell>{ accessory.cost && formatter.currency(accessory.cost, accessory.cost_currency) }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Vendor</Table.Cell>
							<Table.Cell>
								{ accessory.vendor && <Link href={ Routes.vendor(accessory.vendor.slug) }>
									{ accessory.vendor.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

					</Table.Body>
				</Table>
			</Box>
		</>
	)
}

export default AccessoryDetails
