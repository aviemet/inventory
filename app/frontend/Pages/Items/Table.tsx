import React from 'react'
import { Routes } from '@/lib'
import { Link, Table, Money, Group } from '@/Components'
import { EditButton, CheckoutButton, CheckinButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const ItemsTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name" hideable={ false }>Name</Table.Cell>
					<Table.Cell sort="models.name">Model</Table.Cell>
					<Table.Cell sort="asset_tag">Asset Tag</Table.Cell>
					<Table.Cell sort="serial">Serial</Table.Cell>
					<Table.Cell sort="categories.name">Category</Table.Cell>
					<Table.Cell sort="manufacturers.name">Manufacturer</Table.Cell>
					<Table.Cell sort="vendors.name">Vendor</Table.Cell>
					<Table.Cell sort="cost_cents">Cost</Table.Cell>
					<Table.Cell sort="departments.name">Department</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (item: Schema.ItemsIndex) => (
					<Table.Row key={ item.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.item(item) }>{ item.name }</Link>
						</Table.Cell>

						<Table.Cell nowrap >
							{ item.model && <Link href={ Routes.model(item.model.slug) }>
								{ item.model.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.item(item) }>{ item.asset_tag }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.item(item) }>{ item.serial }</Link>
						</Table.Cell>

						<Table.Cell>
							{ item.category && <Link href={ Routes.category(item.category.slug) }>
								{ item.category.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.item(item) }>{ item.manufacturer?.name }</Link>
						</Table.Cell>

						<Table.Cell>
							{ item.vendor && <Link href={ Routes.vendor(item.vendor.slug) }>
								{ item.vendor.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							<Money currency={ item.cost_currency }>{ item.cost }</Money>
						</Table.Cell>

						<Table.Cell >
							{ item.department && <Link href={ Routes.department(item.department) }>
								{ item.department?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell fitContent>
							<Group wrap="nowrap" gap="sm">
								{ item.assigned ?
									<CheckinButton href={ Routes.checkinItem(item) } label={ item.name } />
									:
									<CheckoutButton href={ Routes.checkoutItem(item) } label={ item.name } />
								}
								<EditButton href={ Routes.editItem(item) } label={ item.name } />
							</Group>
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ItemsTable
