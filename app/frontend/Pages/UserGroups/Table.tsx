import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const GroupsTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell hideable={ false }>Group Name</Table.Cell>
					<Table.Cell>People</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (person_group: Schema.PersonGroup) => (
					<Table.Row key={ person_group.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.personGroup(person_group.slug) }>{ person_group.name }</Link>
						</Table.Cell>

						<Table.Cell>
							{ person_group.people?.length }
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editPersonGroup(person_group.slug) } label={ person_group.name } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default GroupsTable
