import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const CompaniesTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name" hideable={ false }>Name</Table.Cell>
					<Table.Cell sort="locations">Locations</Table.Cell>
					<Table.Cell sort="departments">Departments</Table.Cell>
					<Table.Cell sort="items">Assets</Table.Cell>
					<Table.Cell sort="accessories">Accessories</Table.Cell>
					<Table.Cell sort="consumables">Consumables</Table.Cell>
					<Table.Cell sort="components">Components</Table.Cell>
					<Table.Cell sort="licenses">Licenses</Table.Cell>
					<Table.Cell sort="contracts">Contracts</Table.Cell>
					<Table.Cell sort="vendors">Vendors</Table.Cell>
					<Table.Cell sort="people">People</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (company: Schema.CompaniesIndex) => (
					<Table.Row key={ company.id }>
						<Table.Cell nowrap>
							<Link href={ Routes.company(company.slug) }>{ company.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.locations() }>{ company.counts.locations }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.departments() }>{ company.counts.departments }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.items() }>{ company.counts.items }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.accessories() }>{ company.counts.accessories }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.consumables() }>{ company.counts.consumables }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.components() }>{ company.counts.components }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.licenses() }>{ company.counts.licenses }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.contracts() }>{ company.counts.contracts }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.vendors() }>{ company.counts.vendors }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.people() }>{ company.counts.people }</Link>
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editCompany(company.slug) } label={ company.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default CompaniesTable
