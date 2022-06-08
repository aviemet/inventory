import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Option } from '@/Components/Popover'
import { EditButton } from '@/Components/Button'
import {
	TableSection,
	TableTitleSection,
} from '@/Components/Layout/IndexPageComponents'

interface IManufacturersIndexProps {
	manufacturers: Schema.Manufacturer[]
	pagination: Schema.Pagination
}

const ManufacturersIndex = ({ manufacturers, pagination }: IManufacturersIndexProps) => {
	const title = 'Manufacturers'

	return (
		<>
			<Head title={ title }></Head>

			<TableSection>

				<Table.TableProvider
					selectable
					hideable
					model="manufacturers"
					rows={ manufacturers }
					pagination={ pagination }
				>

					<TableTitleSection
						title={ title }
						popover={
							<Popover>
								<Option href={ Routes.newPerson() }>
									Add New Manufacturer
								</Option>
							</Popover>
						}
					/>

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
											<EditButton href={ Routes.editManufacturer(manufacturer.slug) } />
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

export default ManufacturersIndex
