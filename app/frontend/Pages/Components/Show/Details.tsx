import React from 'react'
import { Link, Title, Table, Box, Money } from '@/Components'
import { Routes } from '@/lib'
import { ShowComponentProps } from '.'

const ComponentDetails = ({ component }: ShowComponentProps) => {
	return (
		<>
			<Title order={ 2 }>Details</Title>

			<Box style={ theme => ({ maxWidth: `${theme.breakpoints.sm}` }) }>
				<Table>
					<Table.Body>

						{ component.qty && <Table.Row>
							<Table.Cell>Quantity</Table.Cell>
							<Table.Cell>{ component.qty }</Table.Cell>
						</Table.Row> }

						{ component.qty && component.assignments && <Table.Row>
							<Table.Cell>Available</Table.Cell>
							<Table.Cell>{ component.qty - component.assignments.reduce((sum, assignment) => sum += assignment.active ? 1 : 0, 0) }</Table.Cell>
						</Table.Row> }

						<Table.Row>
							<Table.Cell>Model</Table.Cell>
							<Table.Cell>
								{ component?.model?.slug && <Link href={ Routes.model(component.model.slug) }>
									{ component.model.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Manufacturer</Table.Cell>
							<Table.Cell>
								{ component?.manufacturer?.slug && <Link href={ Routes.manufacturer(component.manufacturer.slug) }>
									{ component.manufacturer!.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Category</Table.Cell>
							<Table.Cell>
								{ component?.category?.slug && <Link href={ Routes.category(component.category.slug) }>
									{ component.category.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Serial</Table.Cell>
							<Table.Cell>{ component.serial }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Purchase Cost</Table.Cell>
							<Table.Cell>
								<Money currency={ component.cost_currency }>{ component.cost }</Money>
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Vendor</Table.Cell>
							<Table.Cell>
								{ component?.vendor?.slug && <Link href={ Routes.vendor(component.vendor.slug) }>
									{ component.vendor.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

					</Table.Body>
				</Table>
			</Box>
		</>
	)
}

export default ComponentDetails
