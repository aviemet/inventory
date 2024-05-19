import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { TableProps } from '@/Components/Table/Table'

const LocationsTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="name">Parent</Table.HeadCell>
					<Table.HeadCell sort="items">Assets</Table.HeadCell>
					<Table.HeadCell sort="accessories">Accessories</Table.HeadCell>
					<Table.HeadCell sort="consumables">Consumables</Table.HeadCell>
					<Table.HeadCell sort="components">Components</Table.HeadCell>
					<Table.HeadCell sort="licenses">Licenses</Table.HeadCell>
					<Table.HeadCell sort="people">People</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (location: Schema.LocationsIndex) => (
					<Table.Row key={ location.id }>
						<Table.Cell nowrap>
							<Link href={ Routes.location(location.slug) }>{ location.name }</Link>
						</Table.Cell>

						<Table.Cell>
							{ location.parent && <Link href={ Routes.location(location.parent.slug!) }>{ location!.parent!.name }</Link> }
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.items() }>{ location!.counts.items }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.accessories() }>{ location!.counts.accessories }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.consumables() }>{ location!.counts.consumables }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.components() }>{ location!.counts.components }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.licenses() }>{ location!.counts.licenses }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.people() }>{ location!.counts.people }</Link>
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editLocation(location.slug) } label={ location.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default LocationsTable
