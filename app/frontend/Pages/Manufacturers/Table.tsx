import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/components'
import { EditButton } from '@/components/Button'
import { TableProps } from '@/components/Table/Table'

const ManufacturersTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="models.count">Models</Table.HeadCell>
					<Table.HeadCell sort="items.count">Items</Table.HeadCell>
					<Table.HeadCell sort="accessories.count">Accessories</Table.HeadCell>
					<Table.HeadCell sort="consumables.count">Consumables</Table.HeadCell>
					<Table.HeadCell sort="components.count">Components</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (manufacturer: Schema.ManufacturersIndex) => (
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

						<Table.Cell fitContent>
							<EditButton href={ Routes.editManufacturer(manufacturer.slug) } label={ manufacturer.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ManufacturersTable
