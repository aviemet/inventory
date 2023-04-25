import React from 'react'
import { Table, Link } from '@/Components'
import { Routes } from '@/lib'

interface DocumentationTableProps {
	documentations: Schema.Documentation
}

const DocumentationTable = ({ documentations }: DocumentationTableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="slug">Slug</Table.Cell>
					<Table.Cell sort="title">Title</Table.Cell>
					<Table.Cell sort="body">Body</Table.Cell>

					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (documentation: Schema.Documentation) => (
					<Table.Row key={ documentations.id }>
						<Table.Cell>
							<Link href={ Routes.documentation(documentation) }>{ documentation.slug }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.documentation(documentation) }>{ documentation.title }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.documentation(documentation) }>{ documentation.body }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.editDocumentation(documentation) }>Edit</Link>
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default DocumentationTable
