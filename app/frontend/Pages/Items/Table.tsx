import React from 'react'
import { Routes } from '@/lib'
import { Link, Table, Money, Group } from '@/Components'
import { EditButton, CheckoutButton, CheckinButton } from '@/Components/Button'
import { type TableProps } from '@/Components/Table/Table'

const ItemsTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="models.name">Model</Table.HeadCell>
					<Table.HeadCell sort="asset_tag">Asset Tag</Table.HeadCell>
					<Table.HeadCell sort="serial">Serial</Table.HeadCell>
					<Table.HeadCell sort="categories.name">Category</Table.HeadCell>
					<Table.HeadCell sort="manufacturers.name">Manufacturer</Table.HeadCell>
					<Table.HeadCell sort="vendors.name">Vendor</Table.HeadCell>
					<Table.HeadCell sort="cost_cents">Cost</Table.HeadCell>
					<Table.HeadCell sort="departments.name">Department</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
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
							<Money accounting>{ item.cost }</Money>
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
