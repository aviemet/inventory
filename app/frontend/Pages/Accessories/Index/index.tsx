import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { EditButton } from '@/Components/Button'
import {
	TableSection,
	TableTitleSection,
} from '@/Components/Layout/IndexPageComponents'

interface IAccessoriesIndexProps {
	accessories: Schema.Accessory[]
	pagination: Schema.Pagination
}

const AccessoriesIndex = ({ accessories, pagination }: IAccessoriesIndexProps) => {
	const title = 'Accessories'

	return (
		<>
			<Head title={ title }></Head>

			<TableSection>
				<Table.TableProvider
					selectable
					hideable
					model="accessories"
					rows={ accessories }
					pagination={ pagination }
				>

					<TableTitleSection
						title={ title }
						newLabel="Create New Accessory"
						newLink={ Routes.newAccessory() }
					/>

					<Table.Table>
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
								<Table.Cell className="text-right">Actions</Table.Cell>
							</Table.Row>
						</Table.Head>

						<Table.Body>
							<Table.RowIterator render={ (accessory: Schema.Accessory) => (
								<Table.Row key={ accessory.id }>

									<Table.Cell nowrap>
										<Link href={ Routes.accessory(accessory) }>{ accessory.name }</Link>
									</Table.Cell>

									<Table.Cell>
										<Link href={ Routes.accessory(accessory) }>{ accessory.model?.name }</Link>
									</Table.Cell>

									<Table.Cell>
										<Link href={ Routes.accessory(accessory) }>{ accessory.serial }</Link>
									</Table.Cell>

									<Table.Cell>
										<Link href={ Routes.accessory(accessory) }>{ accessory.asset_tag }</Link>
									</Table.Cell>

									<Table.Cell>
										<Link href={ Routes.accessory(accessory) }>{ accessory.category?.name }</Link>
									</Table.Cell>

									<Table.Cell>
										<Link href={ Routes.accessory(accessory) }>{ accessory.manufacturer?.name }</Link>
									</Table.Cell>

									<Table.Cell>
										<Link href={ Routes.accessory(accessory) }>{ accessory.vendor?.name }</Link>
									</Table.Cell>

									<Table.Cell>
										{ accessory.cost && <Link href={ Routes.accessory(accessory) }>
											{ formatter.currency(accessory.cost, accessory.cost_currency) }
										</Link> }
									</Table.Cell>

									<Table.Cell>{ accessory.qty }</Table.Cell>

									<Table.Cell>{ accessory.min_qty }</Table.Cell>

									<Table.Cell className="table-column-fit text-right">
										<EditButton href={ Routes.editAccessory(accessory) } />
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

export default AccessoriesIndex
