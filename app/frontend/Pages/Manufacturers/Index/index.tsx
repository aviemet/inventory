import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { NewIcon } from '@/Components/Icons'

interface IManufacturersIndexProps {
	manufacturers: Schema.Manufacturer[]
	pagination: Schema.Pagination
}

const ManufacturersIndex = ({ manufacturers, pagination }: IManufacturersIndexProps) => {
	const title = 'Manufacturers'

	return (
		<>
			<Head title={ title }></Head>

			<Table.Section>

				<Table.TableProvider
					selectable
					hideable
					model="manufacturers"
					rows={ manufacturers }
					pagination={ pagination }
				>


					<Table.Title
						title={ title }
						menuOptions={ [
							{ label: 'New Manufacturer', href: Routes.newManufacturer(), icon: NewIcon },
						] }
					/>

					<Table>
						<Table.Head>
							<Table.Row>
								<Table.Cell sort="name">Name</Table.Cell>
								<Table.Cell sort="models.count">Models</Table.Cell>
								<Table.Cell sort="items.count">Items</Table.Cell>
								<Table.Cell sort="accessories.count">Accessories</Table.Cell>
								<Table.Cell sort="consumables.count">Consumables</Table.Cell>
								<Table.Cell sort="components.count">Components</Table.Cell>
								<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
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

									<Table.Cell className="table-column-fit">
										<EditButton href={ Routes.editManufacturer(manufacturer.slug) } />
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

export default ManufacturersIndex
