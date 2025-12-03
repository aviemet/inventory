import { type DataTableColumn } from "mantine-datatable"

import { Link } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

export const departmentsColumns: DataTableColumn<Schema.DepartmentsIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (department) => <Link href={ Routes.department(department.slug) }>{ department.name }</Link>,
	},
	{
		accessor: "items",
		title: "Assets",
		sortable: true,
		render: (department) => <Link href={ Routes.items() }>{ department.counts.items }</Link>,
	},
	{
		accessor: "accessories",
		title: "Accessories",
		sortable: true,
		render: (department) => <Link href={ Routes.accessories() }>{ department.counts.accessories }</Link>,
	},
	{
		accessor: "consumables",
		title: "Consumables",
		sortable: true,
		render: (department) => <Link href={ Routes.consumables() }>{ department.counts.consumables }</Link>,
	},
	{
		accessor: "components",
		title: "Components",
		sortable: true,
		render: (department) => <Link href={ Routes.components() }>{ department.counts.components }</Link>,
	},
	{
		accessor: "licenses",
		title: "Licenses",
		sortable: true,
		render: (department) => <Link href={ Routes.licenses() }>{ department.counts.licenses }</Link>,
	},
	{
		accessor: "people",
		title: "People",
		sortable: true,
		render: (department) => <Link href={ Routes.people() }>{ department.counts.people }</Link>,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (department) => <EditButton href={ Routes.editDepartment(department.slug) } label={ department.name } />,
	},
]

import { Table } from "@/components"

interface DepartmentsTableProps {
	records: Schema.DepartmentsIndex[]
	pagination: Schema.Pagination
	model: string
}

const DepartmentsTable = ({ records, pagination, model }: DepartmentsTableProps) => {
	return (
		<Table.DataTable
			columns={ departmentsColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default DepartmentsTable
