import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type TableProps } from '@/Components/Table/Table'

const UsersTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="email" hideable={ false }>Email</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (user: Schema.UsersIndex) => (
					<Table.Row key={ user.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.user(user) }>{ user.email }</Link>
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editUser(user) } label={ user.person?.name || user.email } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default UsersTable
