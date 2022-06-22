import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { EditButton, CheckoutButton, CheckinButton } from '@/Components/Button'
import {
	TableSection,
	TableTitleSection,
} from '@/Components/Layout/IndexPageComponents'

interface IItemsIndexProps {
	items: Schema.Item[]
	pagination: Schema.Pagination
}

const ItemsIndex = ({ items, pagination }: IItemsIndexProps) => {
	const title = 'Hardware Assets'

	return (
		<>
			<Head title={ title }></Head>

			<TableSection>
				<Table.TableProvider
					selectable
					hideable
					model="items"
					rows={ items }
					pagination={ pagination }
				>

					<TableTitleSection
						title={ title }
						newLabel="Create New Asset"
						newLink={ Routes.newItem() }
					/>

					<Table.Table>
						<Table.Head>
							<Table.Row>
								<Table.Cell nowrap sort="name" hideable={ false }>Name</Table.Cell>
								<Table.Cell nowrap sort="models.name">Model</Table.Cell>
								<Table.Cell nowrap sort="asset_tag">Asset Tag</Table.Cell>
								<Table.Cell nowrap sort="serial">Serial</Table.Cell>
								<Table.Cell nowrap sort="categories.name">Category</Table.Cell>
								<Table.Cell nowrap sort="manufacturers.name">Manufacturer</Table.Cell>
								<Table.Cell nowrap sort="vendors.name">Vendor</Table.Cell>
								<Table.Cell nowrap sort="cost_cents">Cost</Table.Cell>
								<Table.Cell nowrap sort="departments.name">Department</Table.Cell>
								<Table.Cell nowrap style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
							</Table.Row>
						</Table.Head>

						<Table.Body>
							<Table.RowIterator render={ (item: Schema.Item) => (
								<Table.Row key={ item.id }>
									<Table.Cell nowrap style={ { width: '100%' } }>
										<Link href={ Routes.item(item) }>{ item.name }</Link>
									</Table.Cell>
									<Table.Cell>
										<Link href={ Routes.item(item) }>{ item.model?.name }</Link>
									</Table.Cell>
									<Table.Cell>
										<Link href={ Routes.item(item) }>{ item.asset_tag }</Link>
									</Table.Cell>
									<Table.Cell>
										<Link href={ Routes.item(item) }>{ item.serial }</Link>
									</Table.Cell>
									<Table.Cell>
										<Link href={ Routes.item(item) }>{ item.category?.name }</Link>
									</Table.Cell>
									<Table.Cell>
										<Link href={ Routes.item(item) }>{ item.manufacturer?.name }</Link>
									</Table.Cell>
									<Table.Cell>
										<Link href={ Routes.item(item) }>{ item.vendor?.name }</Link>
									</Table.Cell>
									<Table.Cell>
										<Link href={ Routes.item(item) }>{ item.cost && formatter.currency(item.cost, item.cost_currency) }</Link>
									</Table.Cell>
									<Table.Cell>
										<Link href={ Routes.item(item) }>{ item.department?.name }</Link>
									</Table.Cell>
									<Table.Cell className="table-column-fit text-right">
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
					</Table.Table>

					<Table.Pagination />
				</Table.TableProvider>
			</TableSection>
		</>
	)
}

export default ItemsIndex
