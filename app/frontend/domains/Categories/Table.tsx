import { type DataTableColumn } from "mantine-datatable"

import { Link } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

const categoriesColumns: DataTableColumn<Schema.CategoriesIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (category) => <Link href={ Routes.category(category.slug) }>{ category.name }</Link>,
	},
	{
		accessor: "categorizable_type",
		title: "Type",
		sortable: true,
	},
	{
		accessor: "qty",
		title: "Qty",
		sortable: false,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (category) => <EditButton href={ Routes.editCategory(category.slug) } label={ category.name } />,
	},
]

import { Table } from "@/components"

interface CategoriesTableProps {
	records: Schema.CategoriesIndex[]
	pagination: Schema.Pagination
	model: string
}

const CategoriesTable = ({ records, pagination, model }: CategoriesTableProps) => {
	return (
		<Table.DataTable
			columns={ categoriesColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default CategoriesTable
