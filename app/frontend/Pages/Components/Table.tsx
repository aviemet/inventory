import React from 'react'
import { Routes } from '@/lib'
import { Group, Link, Money, Table } from '@/Components'
import { EditButton, CheckoutButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const ComponentsTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name" hideable={ false }>Name</Table.Cell>
					<Table.Cell sort="models.name">Model</Table.Cell>
					<Table.Cell sort="serial">Serial</Table.Cell>
					<Table.Cell sort="categories.name">Category</Table.Cell>
					<Table.Cell sort="manufacturers.name">Manufacturer</Table.Cell>
					<Table.Cell sort="vendors.name">Vendor</Table.Cell>
					<Table.Cell sort="cost_cents">Cost</Table.Cell>
					<Table.Cell sort="departments.name">Avail. / Qty</Table.Cell>
					<Table.Cell sort="departments.name">Min Qty</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (component: Schema.Component) => (
					<Table.Row key={ component.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.component(component) }>{ component.name }</Link>
						</Table.Cell>

						<Table.Cell>
							{ component.model && <Link href={ Routes.model(component.model.slug) }>
								{ component.model.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.component(component) }>{ component.serial }</Link>
						</Table.Cell>

						<Table.Cell>
							{ component.category && <Link href={ Routes.category(component.category.slug) }>
								{ component.category.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							{ component.manufacturer && <Link href={ Routes.manufacturer(component.manufacturer.slug) }>
								{ component.manufacturer!.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							{ component.vendor && <Link href={ Routes.vendor(component.vendor.slug) }>
								{ component.vendor.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							<Money currency={ component.cost_currency }>{ component.cost }</Money>
						</Table.Cell>

						<Table.Cell nowrap>{ `${component.qty_available} / ${component.qty}` }</Table.Cell>

						<Table.Cell>{ component.min_qty }</Table.Cell>

						<Table.Cell fitContent>
							<Group noWrap spacing="sm">
								<CheckoutButton
									href={ Routes.checkoutComponent(component) }
									disabled={ component.qty_available < 1 }
									tooltipMessage={ component.qty_available < 1 && 'There are none to checkout' }
								/>

								<EditButton href={ Routes.editComponent(component) } />
							</Group>
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ComponentsTable
