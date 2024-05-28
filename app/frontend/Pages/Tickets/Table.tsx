import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type TableProps } from '@/Components/Table/Table'

const TicketsTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="subject" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
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
