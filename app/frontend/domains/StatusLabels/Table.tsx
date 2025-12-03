import { type DataTableColumn } from "mantine-datatable"

import { Link } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

const statusLabelsColumns: DataTableColumn<Schema.StatusLabelsIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (statusLabel) => <Link href={ Routes.statusLabel(statusLabel.slug) }>{ statusLabel.name }</Link>,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (statusLabel) => <EditButton href={ Routes.editStatusLabel(statusLabel.slug) } label={ statusLabel.name } />,
	},
]

import { Table } from "@/components"

interface StatusLabelsTableProps {
	records: Schema.StatusLabelsIndex[]
	pagination: Schema.Pagination
	model: string
}

const StatusLabelsTable = ({ records, pagination, model }: StatusLabelsTableProps) => {
	return (
		<Table.DataTable
			columns={ statusLabelsColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default StatusLabelsTable
