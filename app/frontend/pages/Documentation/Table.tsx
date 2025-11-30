import React from "react"

import { Table, Link } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const DocumentationTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="title">Title</Table.HeadCell>
					<Table.HeadCell sort="documentable_name">In Reference To</Table.HeadCell>
					<Table.HeadCell sort="documentable_type">Referenced Type</Table.HeadCell>
					<Table.HeadCell sort="category.name">Category</Table.HeadCell>
					<Table.HeadCell className="actions">Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (doc: Schema.DocumentationsIndex) => (
					<Table.Row key={ doc.id }>
						<Table.Cell>
							<Link href={ Routes.documentation(doc.slug) }>{ doc.title }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ doc.route }>{ doc.documentable_name }</Link>
						</Table.Cell>

						<Table.Cell>
							{ doc.documentable_type }
						</Table.Cell>

						<Table.Cell>
							{ doc.category.name }
						</Table.Cell>

						<Table.Cell>
							<EditButton href={ Routes.editDocumentation(doc.slug) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default DocumentationTable
