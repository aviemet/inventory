import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Divider, Option } from '@/Components/Popover'
import { EditButton } from '@/Components/Button'
import { useAuth } from '@/Providers'
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
	const { user } = useAuth()

	return (
		<>
			<Head title={ title }></Head>

			<TableSection>
				<Table.TableProvider selectable rows={ items } pagination={ pagination }>

					<TableTitleSection
						title={ title }
						model="items"
						popover={
							<Popover>
								<Option href={ Routes.newItem() }>
									Create New Asset
								</Option>
							</Popover>
						}
					/>

					<div className="scroll-content h-full">
						<Table.Table fixed={ false }>
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
									<Table.Cell className="text-right">Actions</Table.Cell>
								</Table.Row>
							</Table.Head>

							<Table.Body>
								<Table.RowIterator render={ item => (
									<Table.Row key={ item.id }>
										<Table.Cell nowrap>
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
											<Link href={ Routes.item(item) }>{ formatter.currency(item.cost, item.cost_currency) }</Link>
										</Table.Cell>
										<Table.Cell>
											<Link href={ Routes.item(item) }>{ item.department?.name }</Link>
										</Table.Cell>
										<Table.Cell className="table-column-fit text-right">
											<EditButton href={ Routes.editItem(item) } />
										</Table.Cell>
									</Table.Row>
								) } />
							</Table.Body>
						</Table.Table>
					</div>
					<Table.Pagination />
				</Table.TableProvider>
			</TableSection>
		</>
	)
}

export default ItemsIndex
