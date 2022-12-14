import React from 'react'
import { Link, Money, Table } from '@/Components'
import { Routes } from '@/lib'
import { EditButton, CheckoutButton } from '@/Components/Button'
import { isNil } from 'lodash'
import { type ITableProps } from '@/Components/Table/Table'

const AccessoriesTable = (props: ITableProps) => {
	const qty = (accessory: Schema.Accessory) => {
		if(isNil(accessory.qty)) {
			return '-'
		} else if(isNil(accessory.active_assignments_count)) {
			return accessory.qty
		}
		return `${accessory.qty - accessory.active_assignments_count} / ${accessory.qty}`
	}

	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name" hideable={ false }>Name</Table.Cell>
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
				<Table.RowIterator render={ (accessory: Schema.Accessory) => {

					return (
						<Table.Row key={ accessory.id }>

							<Table.Cell nowrap>
								<Link href={ Routes.accessory(accessory) }>{ accessory.name }</Link>
							</Table.Cell>

							<Table.Cell>
								{ accessory.model && <Link href={ Routes.model(accessory.model.slug) }>
									{ accessory.model.name }
								</Link> }
							</Table.Cell>

							<Table.Cell>
								<Link href={ Routes.accessory(accessory) }>{ accessory.serial }</Link>
							</Table.Cell>

							<Table.Cell>
								<Link href={ Routes.accessory(accessory) }>{ accessory.asset_tag }</Link>
							</Table.Cell>

							<Table.Cell>
								{ accessory.category && <Link href={ Routes.category(accessory.category.slug) }>
									{ accessory.category.name }
								</Link> }
							</Table.Cell>

							<Table.Cell>
								{ accessory.manufacturer && <Link href={ Routes.manufacturer(accessory.manufacturer.slug) }>
									{ accessory.manufacturer!.name }
								</Link> }
							</Table.Cell>

							<Table.Cell>
								{ accessory.vendor && <Link href={ Routes.vendor(accessory.vendor.slug) }>
									{ accessory.vendor.name }
								</Link> }
							</Table.Cell>

							<Table.Cell>
								<Money currency={ accessory.cost_currency }>{ accessory.cost }</Money>
							</Table.Cell>

							<Table.Cell nowrap>{ qty(accessory) }</Table.Cell>

							<Table.Cell>{ accessory.min_qty }</Table.Cell>

							<Table.Cell fitContent>
								<CheckoutButton
									href={ Routes.checkoutAccessory(accessory) }
									disabled={ !accessory.available_to_checkout }
									tooltipMessage={ !accessory.available_to_checkout && 'None available to checkout' }
								/>

								<EditButton href={ Routes.editAccessory(accessory) } />
							</Table.Cell>

						</Table.Row>
					)
				} } />
			</Table.Body>
		</Table>
	)
}

export default AccessoriesTable
