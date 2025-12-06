import { type DataTableColumn } from "mantine-datatable"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

const documentationColumns: DataTableColumn<Schema.DocumentationsIndex>[] = [
	{
		accessor: "title",
		title: "Title",
		sortable: true,
		render: (doc) => <Link href={ Routes.documentation(doc.slug) }>{ doc.title }</Link>,
	},
	{
		accessor: "documentable_name",
		title: "In Reference To",
		sortable: true,
		render: (doc) => <Link href={ doc.route }>{ doc.documentable_name }</Link>,
	},
	{
		accessor: "documentable_type",
		title: "Referenced Type",
		sortable: true,
	},
	{
		accessor: "category.name",
		title: "Category",
		sortable: true,
		render: (doc) => doc.category.name,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (doc) => <EditButton href={ Routes.editDocumentation(doc.slug) } />,
	},
]


interface DocumentationTableProps {
	records: Schema.DocumentationsIndex[]
	pagination?: Schema.Pagination
	model?: string
}

const DocumentationTable = ({ records, pagination, model }: DocumentationTableProps) => {
	return (
		<Table.DataTable
			columns={ documentationColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default DocumentationTable
