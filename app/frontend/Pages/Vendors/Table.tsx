import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type TableProps } from '@/Components/Table/Table'

const VendorsTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="url">Website</Table.HeadCell>
					<Table.HeadCell>Contracts</Table.HeadCell>
					<Table.HeadCell>Items</Table.HeadCell>
					<Table.HeadCell>Accessories</Table.HeadCell>
					<Table.HeadCell>Consumables</Table.HeadCell>
					<Table.HeadCell>Components</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (vendor: Schema.VendorsIndex) => (
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
							{ vendor.contracts && <Link href={ Routes.contracts() }>{ vendor.contracts.length }</Link> }
						</Table.Cell>

						<Table.Cell nowrap>
							{ vendor.items && <Link href={ Routes.items() }>{ vendor.items.length }</Link> }
						</Table.Cell>

						<Table.Cell nowrap>
							{ vendor.accessories && <Link href={ Routes.accessories() }>{ vendor.accessories.length }</Link> }
						</Table.Cell>

						<Table.Cell nowrap>
							{ vendor.consumables && <Link href={ Routes.consumables() }>{ vendor.consumables.length }</Link> }
						</Table.Cell>

						<Table.Cell nowrap>
							{ vendor.components && <Link href={ Routes.components() }>{ vendor.components.length }</Link> }
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editVendor(vendor.slug) } label={ vendor.name } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default VendorsTable
