import { type DataTableColumn } from "mantine-datatable"

import { Link, Table } from "@/components"
import { formatter, Routes } from "@/lib"


interface DashboardProps {
	activities: Schema.ActivitiesDashboard[]
}

const columns: DataTableColumn<Schema.ActivitiesDashboard>[] = [
	{
		accessor: "trackable_type",
		title: "Record",
		render: (activity) => activity.route
			? <Link href={ activity.route }>{ activity.trackable_type }</Link>
			: activity.trackable_type,
	},
	{
		accessor: "key",
		title: "Action",
	},
	{
		accessor: "person.name",
		title: "User",
		render: (activity) => activity.person
			? <Link href={ Routes.person(activity.person.id!) }>{ activity.person.name }</Link>
			: null,
	},
	{
		accessor: "created_at",
		title: "Date",
		render: (activity) => formatter.date.long(activity.created_at!),
	},
]

const RecentActivityTable = ({ activities }: DashboardProps) => {
	return (
		<Table.DataTable
			columns={ columns }
			records={ activities }
		/>
	)
}

export default RecentActivityTable

