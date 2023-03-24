import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { ITableProps } from '@/Components/Table/Table'
import { type LocationWithCounts } from './Index'

const LocationsTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name" hideable={ false }>Name</Table.Cell>
					<Table.Cell sort="name">Parent</Table.Cell>
					<Table.Cell sort="items">Assets</Table.Cell>
					<Table.Cell sort="accessories">Accessories</Table.Cell>
					<Table.Cell sort="consumables">Consumables</Table.Cell>
					<Table.Cell sort="components">Components</Table.Cell>
					<Table.Cell sort="licenses">Licenses</Table.Cell>
					<Table.Cell sort="people">People</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (location: LocationWithCounts) => (
					<Table.Row key={ location.id }>
						<Table.Cell nowrap>
							<Link href={ Routes.location(location.slug) }>{ location.name }</Link>
						</Table.Cell>

						<Table.Cell>
							{ location.parent && <Link href={ Routes.location(location.parent.slug) }>{ location!.parent!.name }</Link> }
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
