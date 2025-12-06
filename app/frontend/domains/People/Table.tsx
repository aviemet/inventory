import { type DataTableColumn } from "mantine-datatable"

import { Badge, Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { CheckIcon, CrossIcon } from "@/components/Icons"
import { Routes } from "@/lib"

const peopleColumns: DataTableColumn<Schema.PeopleIndex>[] = [
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
		accessor: "manager.name",
		title: "Manager",
		sortable: true,
		render: (person) => person?.manager?.id ? <Link href={ Routes.person(person.manager.id) }>{ person.manager.name }</Link> : null,
	},
	{
		accessor: "department.name",
		title: "Department",
		sortable: true,
		render: (person) => person.department ? <Link href={ Routes.department(person.department.slug) }>{ person.department.name }</Link> : null,
	},
	{
		accessor: "items",
		title: "Items",
		sortable: true,
		render: (person) => person.items ? <Link href={ Routes.items() }>{ person.items.length }</Link> : null,
	},
	{
		accessor: "accessories",
		title: "Accessories",
		sortable: true,
		render: (person) => person.accessories ? <Link href={ Routes.accessories() }>{ person.accessories.length }</Link> : null,
	},
	{
		accessor: "groups",
		title: "Groups",
		sortable: false,
		render: (person) => person.groups?.map(group => <Badge key={ group.id }>{ group.name }</Badge>),
	},
	{
		accessor: "login_enabled",
		title: "Login Enabled",
		sortable: false,
		render: (person) => person.user && person.user.active ? <CheckIcon /> : <CrossIcon />,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (person) => <EditButton href={ Routes.editPerson(person) } label={ person.name } />,
	},
]

interface PeopleTableProps {
	records: Schema.PeopleIndex[]
	pagination: Schema.Pagination
	model: string
}

const PeopleTable = ({ records, pagination, model }: PeopleTableProps) => {
	return (
		<Table.DataTable
			columns={ peopleColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default PeopleTable
