import React from 'react'
import { Routes } from '@/lib'
import { Group, Link, Money, Table } from '@/Components'
import { EditButton, CheckoutButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'
import ReplenishButton from './ReplenishButton'

const ConsumablesTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name" hideable={ false }>Name</Table.Cell>
					<Table.Cell sort="models.name">Model</Table.Cell>
					<Table.Cell sort="categories.name">Category</Table.Cell>
					<Table.Cell sort="manufacturers.name">Manufacturer</Table.Cell>
					<Table.Cell sort="vendors.name">Vendor</Table.Cell>
					<Table.Cell sort="cost_cents">Cost</Table.Cell>
					<Table.Cell sort="qty">Qty</Table.Cell>
					<Table.Cell sort="min_qty">Min Qty</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (consumable: Schema.Consumable) => (
					<Table.Row key={ consumable.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.consumable(consumable) }>{ consumable.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.consumable(consumable) }>{ consumable.model?.name }</Link>
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
							<Money currency={ consumable.cost_currency }>{ consumable.cost }</Money>
						</Table.Cell>

						<Table.Cell>{ consumable.qty }</Table.Cell>

						<Table.Cell>{ consumable.min_qty }</Table.Cell>

						<Table.Cell fitContent>
							<Group noWrap spacing="sm">
								<CheckoutButton
									href={ Routes.checkoutConsumable(consumable) }
									disabled={ consumable.qty_available < 1 }
									tooltipMessage={ consumable.qty_available < 1 && 'There are none to checkout' }
									label={ consumable.name }
								/>
								<ReplenishButton consumable={ consumable } />
								<EditButton href={ Routes.editConsumable(consumable) } label={ consumable.name } />
							</Group>
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ConsumablesTable
