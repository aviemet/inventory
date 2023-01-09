import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const StatusLabelsTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name" hideable={ false }>Name</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (status_label: Schema.StatusLabel) => (
					<Table.Row key={ status_label.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.statusLabel(status_label.slug) }>{ status_label.name }</Link>
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editStatusLabel(status_label.slug) } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default StatusLabelsTable
