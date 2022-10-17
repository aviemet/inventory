import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { ITableProps } from '@/Components/Table/Table'

const ManufacturersTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
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
				<Table.RowIterator render={ (manufacturer: Schema.ManufacturerWithCounts) => (
					<Table.Row key={ manufacturer.id }>
						<Table.Cell nowrap>
							<Link href={ Routes.manufacturer(manufacturer.slug) }>{ manufacturer.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.models() }>
								{ manufacturer.counts.models }
							</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.items() }>
								{ manufacturer.counts.items }
							</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.accessories() }>
								{ manufacturer.counts.accessories }
							</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.consumables() }>
								{ manufacturer.counts.consumables }
							</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.components() }>
								{ manufacturer.counts.components }
							</Link>
						</Table.Cell>

						<Table.Cell className="table-column-fit">
							<EditButton href={ Routes.editManufacturer(manufacturer.slug) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ManufacturersTable
