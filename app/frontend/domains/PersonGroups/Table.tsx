import { type DataTableColumn } from "mantine-datatable"

import { Link } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

export const personGroupsColumns: DataTableColumn<Schema.PersonGroupsIndex>[] = [
	{
		accessor: "name",
		title: "Group Name",
		sortable: false,
		render: (personGroup) => <Link href={ Routes.personGroup(personGroup.slug) }>{ personGroup.name }</Link>,
	},
	{
		accessor: "people",
		title: "People",
		sortable: false,
		render: (personGroup) => personGroup.people?.length ?? null,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (personGroup) => <EditButton href={ Routes.editPersonGroup(personGroup.slug) } label={ personGroup.name } />,
	},
]

import { Table } from "@/components"

interface PersonGroupsTableProps {
	records: Schema.PersonGroupsIndex[]
	pagination: Schema.Pagination
	model: string
}

const GroupsTable = ({ records, pagination, model }: PersonGroupsTableProps) => {
	return (
		<Table.DataTable
			columns={ personGroupsColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default GroupsTable
