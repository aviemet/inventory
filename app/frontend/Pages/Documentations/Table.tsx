import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const DocumentationTable = (props: ITableProps) => {
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
				<Table.RowIterator render={ (documentation: Schema.DocumentationsIndex) => (
					<Table.Row key={ documentation.id }>
						<Table.Cell>
							<Link href={ Routes.documentation(documentation.id) }>{ documentation.slug }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.documentation(documentation.id) }>{ documentation.title }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.documentation(documentation.id) }>{ documentation.body }</Link>
						</Table.Cell>
						
						<Table.Cell>
							<EditButton href={ Routes.editDocumentation(documentation.id) } label={ documentation.id } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default DocumentationTable
