import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const CategoriesTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name">Name</Table.Cell>
					<Table.Cell sort="number">Type</Table.Cell>
					<Table.Cell sort="begins_at">Qty</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (category: Schema.CategoryWithQty) => (
					<Table.Row key={ category.id }>
						<Table.Cell nowrap>
							<Link href={ Routes.category(category.slug) }>{ category.name }</Link>
						</Table.Cell>

						<Table.Cell nowrap>
							{ category.categorizable_type }
						</Table.Cell>

						<Table.Cell nowrap>
							{ category.qty }
						</Table.Cell>

						<Table.Cell className="table-column-fit">
							<EditButton href={ Routes.editContract(category.slug) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default CategoriesTable
