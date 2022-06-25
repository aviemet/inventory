import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { NewIcon } from '@/Components/Icons'

interface IVendorsIndexProps {
	vendors: Schema.Vendor[]
	pagination: Schema.Pagination
}

const VendorsIndex = ({ vendors, pagination }: IVendorsIndexProps) => {
	const title = 'Vendors'

	return (
		<>
			<Head title={ title }></Head>

			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="vendors"
					rows={ vendors }
					pagination={ pagination }
				>

					<Table.Title
						title={ title }
						menuOptions={ [
							{ label: 'New Vendor', href: Routes.newVendor(), icon: NewIcon },
						] }
					/>

					<Table>
						<Table.Head>
							<Table.Row>
								<Table.Cell sort="name">Name</Table.Cell>
								<Table.Cell sort="url">Website</Table.Cell>
								<Table.Cell sort="contracts.count">Contracts</Table.Cell>
								<Table.Cell sort="items.count">Items</Table.Cell>
								<Table.Cell sort="accessories.count">Accessories</Table.Cell>
								<Table.Cell sort="consumables.count">Consumables</Table.Cell>
								<Table.Cell sort="components.count">Components</Table.Cell>
								<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
							</Table.Row>
						</Table.Head>

						<Table.Body>
							<Table.RowIterator render={ vendor => (
								<Table.Row key={ vendor.id }>

									<Table.Cell nowrap>
										<Link href={ Routes.vendor(vendor.slug) }>{ vendor.name }</Link>
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

									<Table.Cell className="table-column-fit">
										<EditButton href={ Routes.editVendor(vendor.slug) } />
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

export default VendorsIndex
