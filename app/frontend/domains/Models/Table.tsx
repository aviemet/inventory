import { type DataTableColumn } from "mantine-datatable"

import { Link } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

const modelsColumns: DataTableColumn<Schema.ModelsIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (model) => <Link href={ Routes.model(model.slug) }>{ model.name }</Link>,
	},
	{
		accessor: "model_number",
		title: "Model #",
		sortable: true,
		render: (model) => <Link href={ Routes.model(model.slug) }>{ model.model_number }</Link>,
	},
	{
		accessor: "category.name",
		title: "Category",
		sortable: true,
		render: (model) => model.category ? <Link href={ Routes.category(model.category.slug) }>{ model.category.name }</Link> : null,
	},
	{
		accessor: "manufacturer.name",
		title: "Manufacturer",
		sortable: true,
		render: (model) => model.manufacturer ? <Link href={ Routes.manufacturer(model.manufacturer.slug) }>{ model.manufacturer.name }</Link> : null,
	},
	{
		accessor: "count",
		title: "#",
		sortable: true,
		render: (model) => model?.count ?? null,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (model) => <EditButton href={ Routes.editModel(model.slug) } label={ model.name } />,
	},
]

import { Table } from "@/components"

interface ModelsTableProps {
	records: Schema.ModelsIndex[]
	pagination: Schema.Pagination
	model: string
}

const ModelsTable = ({ records, pagination, model }: ModelsTableProps) => {
	return (
		<Table.DataTable
			columns={ modelsColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default ModelsTable
