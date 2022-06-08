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

interface IVendorsIndexProps {
	vendors: Schema.Vendor[]
	pagination: Schema.Pagination
}

const VendorsIndex = ({ vendors, pagination }: IVendorsIndexProps) => {
	const title = 'Vendors'

	return (
		<>
			<Head title={ title }></Head>

			<TableSection>
				<Table.TableProvider
					selectable
					hideable
					model="vendors"
					rows={ vendors }
					pagination={ pagination }
				>

					<TableTitleSection
						title={ title }
						popover={
							<Popover>
								<Option href={ Routes.newPerson() }>
									Add New Person
								</Option>
							</Popover>
						}
					/>

					<div className="scroll-content h-full">
						<Table.Table fixed={ false }>
							<Table.Head>
								<Table.Row>
									<Table.Cell sort="name">Name</Table.Cell>
									<Table.Cell sort="url">Website</Table.Cell>
									<Table.Cell sort="contracts.count">Contracts</Table.Cell>
									<Table.Cell sort="items.count">Items</Table.Cell>
									<Table.Cell sort="accessories.count">Accessories</Table.Cell>
									<Table.Cell sort="consumables.count">Consumables</Table.Cell>
									<Table.Cell sort="components.count">Components</Table.Cell>
									<Table.Cell className="text-right">Actions</Table.Cell>
								</Table.Row>
							</Table.Head>

							<Table.Body>
								<Table.RowIterator render={ vendor => (
									<Table.Row key={ vendor.id }>
										<Table.Cell nowrap>
											<Link href={ Routes.vendor(vendor) }>{ vendor.name }</Link>
										</Table.Cell>

										<Table.Cell nowrap>
											{ vendor.url && <Link href={ vendor.url }>
												{ vendor.url }
											</Link> }
										</Table.Cell>

										<Table.Cell nowrap>
											<Link href={ Routes.contracts() }>{ vendor.contracts.length }</Link>
										</Table.Cell>

										<Table.Cell nowrap>
											<Link href={ Routes.items() }>{ vendor.items.length }</Link>
										</Table.Cell>

										<Table.Cell nowrap>
											<Link href={ Routes.accessories() }>{ vendor.accessories.length }</Link>
										</Table.Cell>

										<Table.Cell nowrap>
											<Link href={ Routes.consumables() }>{ vendor.consumables.length }</Link>
										</Table.Cell>

										<Table.Cell nowrap>
											<Link href={ Routes.components() }>{ vendor.components.length }</Link>
										</Table.Cell>

										<Table.Cell className="table-column-fit text-right">
											<EditButton href={ Routes.editVendor(vendor) } />
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

export default VendorsIndex
