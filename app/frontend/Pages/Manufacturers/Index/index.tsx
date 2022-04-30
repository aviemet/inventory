import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Divider, Option } from '@/Components/Popover'
import { MdEdit } from 'react-icons/md'

interface IManufacturersIndexProps {
	manufacturers: Schema.Manufacturer[]
	pagination: Schema.Pagination
}

const ManufacturersIndex = ({ manufacturers, pagination }: IManufacturersIndexProps) => {
	const title = 'Manufacturers'

	return (
		<>
			<Head title={ title }></Head>

			<section className="flex flex-col h-full">
				<Table.TableProvider selectable rows={ manufacturers } pagination={ pagination }>
					<div className="flex items-center justify-between">
						<h1 className="md:inline-block md:flex-1 md:align-middle align-text-top">{ title }</h1>
						<div className="md:flex-1 flex">
							<Table.SearchInput model="items" />

							<div className="inline-block">
								<Popover>
									<Option>
										<Link href={ Routes.newPerson() } key="new_person">Add New Manufacturer</Link>
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
									<Table.Cell sort="models.count">Models</Table.Cell>
									<Table.Cell sort="items.count">Items</Table.Cell>
									<Table.Cell sort="accessories.count">Accessories</Table.Cell>
									<Table.Cell sort="consumables.count">Consumables</Table.Cell>
									<Table.Cell sort="components.count">Components</Table.Cell>
									<Table.Cell className="text-right">Actions</Table.Cell>
								</Table.Row>
							</Table.Head>

							<Table.Body>
								<Table.RowIterator render={ manufacturer => (
									<Table.Row key={ manufacturer.id }>
										<Table.Cell nowrap>
											<Link href={ Routes.manufacturer(manufacturer.slug) }>{ manufacturer.name }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.models() }>
												{ manufacturer.models?.length }
											</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.items() }>
												{ manufacturer.items?.length }
											</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.accessories() }>
												{ manufacturer.accessories?.length }
											</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.consumables() }>
												{ manufacturer.consumables?.length }
											</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.components() }>
												{ manufacturer.components?.length }
											</Link>
										</Table.Cell>

										<Table.Cell className="table-column-fit text-right">
											<Link as="button" href={ Routes.editManufacturer(manufacturer.slug) }><MdEdit /></Link>
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

export default ManufacturersIndex
