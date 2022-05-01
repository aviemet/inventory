import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Divider, Option } from '@/Components/Popover'
import { EditButton } from '@/Components/Button'

interface IVendorsIndexProps {
	vendors: Schema.Vendor[]
	pagination: Schema.Pagination
}

const VendorsIndex = ({ vendors, pagination }: IVendorsIndexProps) => {
	const title = 'Vendors'
	console.log({ vendors })

	return (
		<>
			<Head title={ title }></Head>

			<section className="flex flex-col h-full">
				<Table.TableProvider selectable rows={ vendors } pagination={ pagination }>
					<div className="flex items-center justify-between">
						<h1 className="md:inline-block md:flex-1 md:align-middle align-text-top">{ title }</h1>
						<div className="md:flex-1 flex">
							<Table.SearchInput model="items" />

							<div className="inline-block">
								<Popover>
									<Option>
										<Link href={ Routes.newPerson() } key="new_person">Add New Person</Link>
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
			</section>
		</>
	)
}

export default VendorsIndex
