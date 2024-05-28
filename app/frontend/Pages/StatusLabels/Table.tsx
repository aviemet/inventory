import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type TableProps } from '@/Components/Table/Table'

const StatusLabelsTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (status_label: Schema.StatusLabelsIndex) => (
					<Table.Row key={ status_label.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.statusLabel(status_label.slug) }>{ status_label.name }</Link>
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editStatusLabel(status_label.slug) } label={ status_label.name } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default StatusLabelsTable
