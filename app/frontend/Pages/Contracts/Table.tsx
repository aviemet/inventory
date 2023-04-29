import React from 'react'
import { Routes, formatter } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const ContractsTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name" hideable={ false }>Name</Table.Cell>
					<Table.Cell sort="number">#</Table.Cell>
					<Table.Cell sort="begins_at">Start Date</Table.Cell>
					<Table.Cell sort="ends_at">End Date</Table.Cell>
					<Table.Cell sort="vendor.name">Vendor</Table.Cell>
					<Table.Cell sort="category.name">Category</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (contract: Schema.ContractsIndex) => (
					<Table.Row key={ contract.id }>
						<Table.Cell nowrap>
							<Link href={ Routes.contract(contract.slug) }>{ contract.name }</Link>
						</Table.Cell>

						<Table.Cell nowrap>
							<Link href={ Routes.contract(contract.slug) }>{ contract.number }</Link>
						</Table.Cell>

						<Table.Cell nowrap>
							{ contract.begins_at && formatter.date.short(contract.begins_at) }
						</Table.Cell>

						<Table.Cell nowrap>
							{ contract.ends_at && formatter.date.short(contract.ends_at) }
						</Table.Cell>

						<Table.Cell>
							{ contract.vendor && <Link href={ Routes.vendor(contract.vendor.slug) }>
								{ contract.vendor?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							{ contract.category && <Link href={ Routes.category(contract.category) }>
								{ contract.category?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editContract(contract) } label={ contract.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ContractsTable
