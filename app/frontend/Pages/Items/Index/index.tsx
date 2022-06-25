import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link, Table } from '@/Components'
import { Routes, formatter } from '@/lib'
import { EditButton, CheckoutButton, CheckinButton } from '@/Components/Button'

interface IItemsIndexProps {
	items: Schema.Item[]
	pagination: Schema.Pagination
}

const ItemsIndex = ({ items, pagination }: IItemsIndexProps) => {
	const title = 'Hardware Assets'

	return (
		<>
			<Head title={ title }></Head>

			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="items"
					rows={ items }
					pagination={ pagination }
				>

					<Table.Title
						title={ title }
						newLabel="Create New Asset"
						newLink={ Routes.newItem() }
					/>

					<Table>
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
							<Table.RowIterator render={ (item: Schema.Item) => (
								<Table.Row key={ item.id }>

									<Table.Cell nowrap style={ { width: '100%' } }>
										<Link href={ Routes.item(item) }>{ item.name }</Link>
									</Table.Cell>

									<Table.Cell nowrap hideable="models.name">
										<Link href={ Routes.item(item) }>{ item.model?.name }</Link>
									</Table.Cell>

									<Table.Cell hideable="asset_tag">
										<Link href={ Routes.item(item) }>{ item.asset_tag }</Link>
									</Table.Cell>

									<Table.Cell hideable="serial">
										<Link href={ Routes.item(item) }>{ item.serial }</Link>
									</Table.Cell>

									<Table.Cell hideable="categories.name">
										<Link href={ Routes.item(item) }>{ item.category?.name }</Link>
									</Table.Cell>

									<Table.Cell hideable="manufacturer.name">
										<Link href={ Routes.item(item) }>{ item.manufacturer?.name }</Link>
									</Table.Cell>

									<Table.Cell hideable="vendor.name">
										<Link href={ Routes.item(item) }>{ item.vendor?.name }</Link>
									</Table.Cell>

									<Table.Cell hideable="cost">
										<Link href={ Routes.item(item) }>{ item.cost && formatter.currency(item.cost, item.cost_currency) }</Link>
									</Table.Cell>

									<Table.Cell hideable="department.name">
										<Link href={ Routes.item(item) }>{ item.department?.name }</Link>
									</Table.Cell>

									<Table.Cell className="table-column-fit">
										{ item.assigned ?
											<CheckinButton href={ Routes.checkinItem(item) } />
											:
											<CheckoutButton href={ Routes.checkoutItem(item) } />
										}
										<EditButton href={ Routes.editItem(item) } />
									</Table.Cell>

								</Table.Row>
							) } />
						</Table.Body>
					</Table>

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</>
	)
}

export default ItemsIndex
