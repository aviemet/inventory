import React from 'react'
import { Routes, formatter } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton, CheckoutButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const Index = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name">Name</Table.Cell>
					<Table.Cell sort="models.name">Model</Table.Cell>
					<Table.Cell sort="serial">Serial</Table.Cell>
					<Table.Cell sort="asset_tag">Asset Tag</Table.Cell>
					<Table.Cell sort="categories.name">Category</Table.Cell>
					<Table.Cell sort="manufacturers.name">Manufacturer</Table.Cell>
					<Table.Cell sort="vendors.name">Vendor</Table.Cell>
					<Table.Cell sort="cost_cents">Cost</Table.Cell>
					<Table.Cell sort="departments.name">Qty</Table.Cell>
					<Table.Cell sort="departments.name">Min Qty</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ consumable => (
					<Table.Row key={ consumable.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.consumable(consumable) }>{ consumable.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.consumable(consumable) }>{ consumable.model?.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.consumable(consumable) }>{ consumable.asset_tag }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.consumable(consumable) }>{ consumable.serial }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.consumable(consumable) }>{ consumable.category?.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.consumable(consumable) }>{ consumable.manufacturer?.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.consumable(consumable) }>{ consumable.vendor?.name }</Link>
						</Table.Cell>

						<Table.Cell>
							{ consumable.cost ? formatter.currency(consumable.cost, consumable.cost_currency) : '-' }
						</Table.Cell>

						<Table.Cell>{ consumable.qty }</Table.Cell>

						<Table.Cell>{ consumable.min_qty }</Table.Cell>

						<Table.Cell className="table-column-fit">
							<CheckoutButton href={ Routes.checkoutConsumable(consumable) } />
							<EditButton href={ Routes.editConsumable(consumable) } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default Index
