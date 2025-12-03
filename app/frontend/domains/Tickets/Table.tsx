import { type DataTableColumn } from "mantine-datatable"

import { Link } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

const ticketsColumns: DataTableColumn<Schema.TicketsIndex>[] = [
	{
		accessor: "subject",
		title: "Name",
		sortable: true,
		render: (ticket) => <Link href={ Routes.ticket(ticket) }>{ ticket.subject }</Link>,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (ticket) => <EditButton href={ Routes.editTicket(ticket) } label={ `ticket number ${ticket.number}` } />,
	},
]

import { Table } from "@/components"

interface TicketsTableProps {
	records: Schema.TicketsIndex[]
	pagination: Schema.Pagination
	model: string
}

const TicketsTable = ({ records, pagination, model }: TicketsTableProps) => {
	return (
		<Table.DataTable
			columns={ ticketsColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default TicketsTable
