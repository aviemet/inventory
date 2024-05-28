import React from 'react'
import { Routes } from '@/lib'
import { Group, Link, Money, Table } from '@/Components'
import { EditButton, CheckoutButton } from '@/Components/Button'
import { type TableProps } from '@/Components/Table/Table'

const ComponentsTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="models.name">Model</Table.HeadCell>
					<Table.HeadCell sort="serial">Serial</Table.HeadCell>
					<Table.HeadCell sort="categories.name">Category</Table.HeadCell>
					<Table.HeadCell sort="manufacturers.name">Manufacturer</Table.HeadCell>
					<Table.HeadCell sort="vendors.name">Vendor</Table.HeadCell>
					<Table.HeadCell sort="cost_cents">Cost</Table.HeadCell>
					<Table.HeadCell sort="departments.name">Avail. / Qty</Table.HeadCell>
					<Table.HeadCell sort="departments.name">Min Qty</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (component: Schema.ComponentsIndex) => (
					<Table.Row key={ component.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.component({ id: component.id }) }>{ component.name }</Link>
						</Table.Cell>

						<Table.Cell>
							{ component?.model?.slug && <Link href={ Routes.model(component.model.slug) }>
								{ component.model.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.component({ id: component.id }) }>{ component.serial }</Link>
						</Table.Cell>

						<Table.Cell>
							{ component?.category?.slug && <Link href={ Routes.category(component.category.slug) }>
								{ component.category.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							{ component?.manufacturer?.slug && <Link href={ Routes.manufacturer(component.manufacturer.slug) }>
								{ component.manufacturer!.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							{ component?.vendor?.slug && <Link href={ Routes.vendor(component.vendor.slug) }>
								{ component.vendor.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							<Money currency={ component.cost_currency }>{ component.cost }</Money>
						</Table.Cell>

						<Table.Cell nowrap>{ `${component.qty_available} / ${component.qty}` }</Table.Cell>

						<Table.Cell>{ component.min_qty }</Table.Cell>

						<Table.Cell fitContent>
							<Group wrap="nowrap" gap="sm">
								<CheckoutButton
									href={ Routes.checkoutComponent({ id: component.id }) }
									disabled={ component.qty_available < 1 }
									tooltipMessage={ component.qty_available < 1 && 'There are none to checkout' }
									label={ component.name }
								/>

								<EditButton href={ Routes.editComponent({ id: component.id }) } label={ component.name } />
							</Group>
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ComponentsTable
