import { type DataTableColumn } from "mantine-datatable"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

const usersColumns: DataTableColumn<Schema.UsersIndex>[] = [
	{
		accessor: "email",
		title: "Email",
		sortable: true,
		render: (user) => <Link href={ Routes.user(user) }>{ user.email }</Link>,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (user) => <EditButton href={ Routes.editUser(user) } label={ user.person?.name || user.email } />,
	},
]

interface UsersTableProps {
	records: Schema.UsersIndex[]
	pagination: Schema.Pagination
	model: string
}

const UsersTable = ({ records, pagination, model }: UsersTableProps) => {
	return (
		<Table.DataTable
			columns={ usersColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default UsersTable
