import React from 'react'
import { Link, Title, Table, Box } from '@/components'
import { formatter, Routes } from '@/lib'
import { ShowConsumableProps } from '.'

const ConsumableDetails = ({ consumable }: ShowConsumableProps) => {
	return (
		<>
			<Title order={ 2 }>Details</Title>

			<Box style={ theme => ({ maxWidth: `${theme.breakpoints.sm}` }) }>
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
								{ consumable?.model?.slug && <Link href={ Routes.model(consumable.model.slug) }>
									{ consumable.model.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Manufacturer</Table.Cell>
							<Table.Cell>
								{ consumable?.manufacturer?.slug && <Link href={ Routes.manufacturer(consumable.manufacturer.slug) }>
									{ consumable.manufacturer!.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Category</Table.Cell>
							<Table.Cell>
								{ consumable?.category?.slug && <Link href={ Routes.category(consumable.category.slug) }>
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
								{ consumable?.vendor?.slug && <Link href={ Routes.vendor(consumable.vendor.slug) }>
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
