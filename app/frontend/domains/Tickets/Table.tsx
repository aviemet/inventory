import { createColumnHelper } from "@tanstack/react-table"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.TicketsIndex>()

export const ticketsColumns = [
	columnHelper.accessor("subject", {
		header: "Name",
		enableSorting: true,
		meta: {
			model: "subject",
			hideable: false,
		},
	}),
	columnHelper.display({
		id: "actions",
		header: "Actions",
		enableSorting: false,
		meta: {
			hideable: false,
		},
	}),
]

const TicketsTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="subject" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (ticket: Schema.TicketsIndex) => (
					<Table.Row key={ ticket.id }>

						<Table.Cell columnId="subject" nowrap>
							<Link href={ Routes.ticket(ticket) }>{ ticket.subject }</Link>
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editTicket(ticket) } label={ `ticket number ${ticket.number}` } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default TicketsTable
