import { createColumnHelper } from "@tanstack/react-table"

import { Table, Link } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.DocumentationsIndex>()

export const documentationColumns = [
	columnHelper.accessor("title", {
		header: "Title",
		enableSorting: true,
		meta: {
			model: "title",
			hideable: "title",
		},
	}),
	columnHelper.accessor("documentable_name", {
		header: "In Reference To",
		enableSorting: true,
		meta: {
			model: "documentable_name",
			hideable: "documentable_name",
		},
	}),
	columnHelper.accessor("documentable_type", {
		header: "Referenced Type",
		enableSorting: true,
		meta: {
			model: "documentable_type",
			hideable: "documentable_type",
		},
	}),
	columnHelper.accessor(row => row.category?.name, {
		id: "category",
		header: "Category",
		enableSorting: true,
		meta: {
			model: "category.name",
			hideable: "category",
		},
	}),
	columnHelper.display({
		id: "actions",
		header: "Actions",
		enableSorting: false,
		meta: {
			hideable: false,
		},
	}),
]

const DocumentationTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="title" />
					<Table.HeadCell columnId="documentable_name" />
					<Table.HeadCell columnId="documentable_type" />
					<Table.HeadCell columnId="category" />
					<Table.HeadCell columnId="actions" className="actions" />
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (doc: Schema.DocumentationsIndex) => (
					<Table.Row key={ doc.id }>
						<Table.Cell columnId="title">
							<Link href={ Routes.documentation(doc.slug) }>{ doc.title }</Link>
						</Table.Cell>

						<Table.Cell columnId="documentable_name">
							<Link href={ doc.route }>{ doc.documentable_name }</Link>
						</Table.Cell>

						<Table.Cell columnId="documentable_type">
							{ doc.documentable_type }
						</Table.Cell>

						<Table.Cell columnId="category">
							{ doc.category.name }
						</Table.Cell>

						<Table.Cell columnId="actions">
							<EditButton href={ Routes.editDocumentation(doc.slug) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default DocumentationTable
