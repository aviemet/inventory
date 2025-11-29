import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/components'
import { EditButton } from '@/components/Button'
import { TableProps } from '@/components/Table/Table'

const ModelsTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="model_number">Model #</Table.HeadCell>
					<Table.HeadCell sort="category.name">Category</Table.HeadCell>
					<Table.HeadCell sort="manufacturer.name">Manufacturer</Table.HeadCell>
					<Table.HeadCell sort="count">#</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
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
