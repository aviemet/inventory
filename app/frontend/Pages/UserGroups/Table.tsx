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
					<Table.Cell>Users</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (user_group: Schema.UserGroup) => (
					<Table.Row key={ user_group.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.userGroup(user_group.slug) }>{ user_group.name }</Link>
						</Table.Cell>

						<Table.Cell>
							{ user_group.users?.length }
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editUserGroup(user_group.slug) } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default GroupsTable
