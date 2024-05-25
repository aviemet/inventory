import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type TableProps } from '@/Components/Table/Table'

const CategoriesTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="categorizable_type">Type</Table.HeadCell>
					<Table.HeadCell>Qty</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (category: Schema.CategoriesIndex) => (
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

						<Table.Cell fitContent>
							<EditButton href={ Routes.editCategory(category.slug) } label={ category.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default CategoriesTable
