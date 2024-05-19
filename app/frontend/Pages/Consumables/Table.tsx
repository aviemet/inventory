import React from 'react'
import { Routes } from '@/lib'
import { Group, Link, Money, Table } from '@/Components'
import { EditButton, CheckoutButton } from '@/Components/Button'
import { type TableProps } from '@/Components/Table/Table'
import ReplenishButton from './ReplenishButton'

const ConsumablesTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="models.name">Model</Table.HeadCell>
					<Table.HeadCell sort="categories.name">Category</Table.HeadCell>
					<Table.HeadCell sort="manufacturers.name">Manufacturer</Table.HeadCell>
					<Table.HeadCell sort="vendors.name">Vendor</Table.HeadCell>
					<Table.HeadCell sort="cost_cents">Cost</Table.HeadCell>
					<Table.HeadCell sort="qty">Qty</Table.HeadCell>
					<Table.HeadCell sort="min_qty">Min Qty</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (consumable: Schema.ConsumablesIndex) => (
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
							<Group wrap="nowrap" gap="sm">
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
