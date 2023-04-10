import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { ITableProps } from '@/Components/Table/Table'

const ModelsTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name" hideable={ false }>Name</Table.Cell>
					<Table.Cell sort="model_number">Model #</Table.Cell>
					<Table.Cell sort="category.name">Category</Table.Cell>
					<Table.Cell sort="manufacturer.name">Manufacturer</Table.Cell>
					<Table.Cell sort="count">#</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (model: Schema.ModelsIndex) => (
					<Table.Row key={ model.id }>
						<Table.Cell nowrap>
							<Link href={ Routes.model(model.slug) }>{ model.name }</Link>
						</Table.Cell>

						<Table.Cell nowrap>
							<Link href={ Routes.model(model.slug) }>{ model.model_number }</Link>
						</Table.Cell>

						<Table.Cell>
							{ model.category && <Link href={ Routes.category(model.category.slug) }>
								{ model.category.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							{ model.manufacturer && <Link href={ Routes.manufacturer(model.manufacturer.slug) }>
								{ model.manufacturer.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							{ model?.count && model.count }
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editModel(model.slug) } label={ model.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ModelsTable
