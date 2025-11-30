import { Table, Link } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const DocumentationTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="title" sort="title">Title</Table.HeadCell>
					<Table.HeadCell columnId="documentable_name" sort="documentable_name">In Reference To</Table.HeadCell>
					<Table.HeadCell columnId="documentable_type" sort="documentable_type">Referenced Type</Table.HeadCell>
					<Table.HeadCell columnId="category" sort="category.name">Category</Table.HeadCell>
					<Table.HeadCell columnId="actions" className="actions">Actions</Table.HeadCell>
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
