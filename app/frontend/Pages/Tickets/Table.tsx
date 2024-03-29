import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const TicketsTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="subject" hideable={ false }>Name</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (ticket: Schema.TicketsIndex) => (
					<Table.Row key={ ticket.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.ticket(ticket) }>{ ticket.subject }</Link>
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editTicket(ticket) } label={ `ticket number ${ticket.number}` } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default TicketsTable
