import React from 'react'
import { Group, Link, Money, Table } from '@/Components'
import { Routes } from '@/lib'
import { EditButton, CheckoutButton } from '@/Components/Button'
import { type TableProps } from '@/Components/Table/Table'

const AccessoriesTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="models.name">Model</Table.HeadCell>
					<Table.HeadCell sort="serial">Serial</Table.HeadCell>
					<Table.HeadCell sort="asset_tag">Asset Tag</Table.HeadCell>
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
				<Table.RowIterator render={ (accessory: Schema.AccessoriesIndex) => {

					return (
						<Table.Row key={ accessory.id }>

							<Table.Cell nowrap>
								<Link href={ Routes.accessory(accessory) }>{ accessory.name }</Link>
							</Table.Cell>

							<Table.Cell>
								{ accessory?.model?.slug && <Link href={ Routes.model(accessory.model.slug) }>
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
								{ accessory?.category?.slug && <Link href={ Routes.category(accessory.category.slug) }>
									{ accessory.category.name }
								</Link> }
							</Table.Cell>

							<Table.Cell>
								{ accessory?.manufacturer?.slug && <Link href={ Routes.manufacturer(accessory.manufacturer.slug) }>
									{ accessory.manufacturer!.name }
								</Link> }
							</Table.Cell>

							<Table.Cell>
								{ accessory?.vendor?.slug && <Link href={ Routes.vendor(accessory.vendor.slug) }>
									{ accessory.vendor.name }
								</Link> }
							</Table.Cell>

							<Table.Cell>
								<Money currency={ accessory.cost_currency }>{ accessory.cost }</Money>
							</Table.Cell>

							<Table.Cell nowrap>{ `${accessory.qty_available} / ${accessory.qty}` }</Table.Cell>

							<Table.Cell>{ accessory.min_qty }</Table.Cell>

							<Table.Cell fitContent>
								<Group wrap="nowrap" gap="sm">
									<CheckoutButton
										href={ Routes.checkoutAccessory(accessory) }
										disabled={ accessory.qty_available < 1 }
										tooltipMessage={ accessory.qty_available < 1 && 'None available to checkout' }
										label={ accessory.name }
									/>

									<EditButton href={ Routes.editAccessory(accessory) } label={ accessory.name } />
								</Group>
							</Table.Cell>

						</Table.Row>
					)
				} } />
			</Table.Body>
		</Table>
	)
}

export default AccessoriesTable
