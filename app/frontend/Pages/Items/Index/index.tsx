import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Divider, Option } from '@/Components/Popover'
import { MdEdit } from 'react-icons/md'

interface IItemsIndexProps {
	items: Schema.Item[]
	pagination: Schema.Pagination
}

const Index = ({ items, pagination }: IItemsIndexProps) => {
	const title = 'Hardware Assets'

	return (
		<>
			<Head title={ title }></Head>

			<section className="flex flex-col h-full">
				<Table.TableProvider selectable rows={ items } pagination={ pagination }>
					<div className="flex items-center justify-between">
						<h1 className="md:inline-block md:flex-1 md:align-middle align-text-top">{ title }</h1>
						<div className="md:flex-1 flex">
							<Table.SearchInput model="items" />

							<div className="inline-block">
								<Popover>
									<Option>
										<Link href={ Routes.newItem() } key="new_asset">Create New Asset</Link>
									</Option>
								</Popover>
							</div>

						</div>
					</div>

					<div className="scroll-content h-full">
						<Table.Table fixed={ false }>
							<Table.Head>
								<Table.Row>
									<Table.Cell sort="name">Name</Table.Cell>
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
											<Link as="button" href={ Routes.editItem(item) }><MdEdit /></Link>
										</Table.Cell>
									</Table.Row>
								) } />
							</Table.Body>
						</Table.Table>
					</div>
					<Table.Pagination />
				</Table.TableProvider>
			</section>
		</>
	)
}

export default Index