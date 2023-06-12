import React from 'react'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'
import { Routes, capitalize, polymorphicRoute } from '@/lib'

const DocumentationTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="title">Title</Table.Cell>
					<Table.Cell sort="slug">Thing</Table.Cell>

					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (doc: Schema.DocumentationsIndex) => (
					<Table.Row key={ doc.id }>
						<Table.Cell>
							<Link href={ Routes.documentation(doc.slug) }>{ doc.title }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ doc.route }>{ doc.slug }</Link>
						</Table.Cell>

						<Table.Cell>
							<EditButton href={ Routes.editDocumentation(doc.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default DocumentationTable
