import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const DepartmentsTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name" hideable={ false }>Name</Table.Cell>
					<Table.Cell sort="items">Assets</Table.Cell>
					<Table.Cell sort="accessories">Accessories</Table.Cell>
					<Table.Cell sort="consumables">Consumables</Table.Cell>
					<Table.Cell sort="components">Components</Table.Cell>
					<Table.Cell sort="licenses">Licenses</Table.Cell>
					<Table.Cell sort="people">People</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (department: Schema.DepartmentWithCounts) => (
					<Table.Row key={ department.id }>
						<Table.Cell nowrap>
							<Link href={ Routes.department(department.slug) }>{ department.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.items() }>{ department!.counts.items }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.accessories() }>{ department!.counts.accessories }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.consumables() }>{ department!.counts.consumables }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.components() }>{ department!.counts.components }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.licenses() }>{ department!.counts.licenses }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.people() }>{ department!.counts.people }</Link>
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editDepartment(department.slug) } label={ department.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default DepartmentsTable
