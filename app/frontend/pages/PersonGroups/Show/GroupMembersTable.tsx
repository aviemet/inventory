import { type DataTableColumn } from "mantine-datatable"

import { Link } from "@/components"
import { CheckIcon, CrossIcon } from "@/components/Icons"
import { Routes } from "@/lib"

export const groupMembersColumns: DataTableColumn<Schema.PeopleBasic>[] = [
	{
		accessor: "first_name",
		title: "First Name",
		sortable: true,
		render: (person) => <Link href={ Routes.person(person) }>{ person.first_name }</Link>,
	},
	{
		accessor: "last_name",
		title: "Last Name",
		sortable: true,
		render: (person) => <Link href={ Routes.person(person) }>{ person.last_name }</Link>,
	},
	{
		accessor: "employee_number",
		title: "Emp. #",
		sortable: true,
		render: (person) => <Link href={ Routes.person(person) }>{ person.employee_number }</Link>,
	},
	{
		accessor: "job_title",
		title: "Title",
		sortable: true,
		render: (person) => <Link href={ Routes.person(person) }>{ person.job_title }</Link>,
	},
	{
		accessor: "department.name",
		title: "Department",
		sortable: true,
		render: (person) => person.department ? <Link href={ Routes.department(person.department.slug) }>{ person.department.name }</Link> : null,
	},
	{
		accessor: "login_enabled",
		title: "Login Enabled",
		sortable: false,
		render: (person) => person.user && person.user.active ? <CheckIcon /> : <CrossIcon />,
	},
]

interface GroupMembersTableProps {
	people: Schema.PeopleBasic[]
}

const GroupMembersTable = ({ people }: GroupMembersTableProps) => {
	return (
		<Table.DataTable
			columns={ groupMembersColumns }
			records={ people }
		/>
	)
}

export default GroupMembersTable
