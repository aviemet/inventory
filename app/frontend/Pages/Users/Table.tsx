import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const UsersTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="email" hideable={ false }>Email</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (user: Schema.User) => (
					<Table.Row key={ user.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.user(user) }>{ user.email }</Link>
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editUser(user) } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default UsersTable
