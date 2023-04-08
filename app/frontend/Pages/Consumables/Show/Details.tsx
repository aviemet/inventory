import React from 'react'
import { Link, Heading, Table, Box } from '@/Components'
import { formatter, Routes } from '@/lib'
import { IShowConsumableProps } from '.'

const ConsumableDetails = ({ consumable }: IShowConsumableProps) => {
	return (
		<>
			<Heading order={ 3 }>Details</Heading>

			<Box sx={ theme => ({ maxWidth: `${theme.breakpoints.sm}` }) }>
				<Table>
					<Table.Body>

						{ consumable.qty && <Table.Row>
							<Table.Cell>Quantity</Table.Cell>
							<Table.Cell>{ consumable.qty }</Table.Cell>
						</Table.Row> }

						{ consumable.qty && consumable.assignments && <Table.Row>
							<Table.Cell>Available</Table.Cell>
							<Table.Cell>{ consumable.qty - consumable.assignments.reduce((sum, assignment) => sum += assignment.active ? 1 : 0, 0) }</Table.Cell>
						</Table.Row> }

						<Table.Row>
							<Table.Cell>Model</Table.Cell>
							<Table.Cell>
								{ consumable.model && <Link href={ Routes.model(consumable.model.slug) }>
									{ consumable.model.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Manufacturer</Table.Cell>
							<Table.Cell>
								{ consumable.manufacturer && <Link href={ Routes.manufacturer(consumable.manufacturer.slug) }>
									{ consumable.manufacturer!.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Category</Table.Cell>
							<Table.Cell>
								{ consumable.category && <Link href={ Routes.category(consumable.category.slug) }>
									{ consumable.category.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Purchase Cost</Table.Cell>
							<Table.Cell>{ consumable.cost && formatter.currency(consumable.cost, consumable.cost_currency) }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Vendor</Table.Cell>
							<Table.Cell>
								{ consumable.vendor && <Link href={ Routes.vendor(consumable.vendor.slug) }>
									{ consumable.vendor.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

					</Table.Body>
				</Table>
			</Box>
		</>
	)
}

export default ConsumableDetails
