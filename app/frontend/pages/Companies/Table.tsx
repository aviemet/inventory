import React from "react"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const CompaniesTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="locations">Locations</Table.HeadCell>
					<Table.HeadCell sort="departments">Departments</Table.HeadCell>
					<Table.HeadCell sort="items">Assets</Table.HeadCell>
					<Table.HeadCell sort="accessories">Accessories</Table.HeadCell>
					<Table.HeadCell sort="consumables">Consumables</Table.HeadCell>
					<Table.HeadCell sort="components">Components</Table.HeadCell>
					<Table.HeadCell sort="licenses">Licenses</Table.HeadCell>
					<Table.HeadCell sort="contracts">Contracts</Table.HeadCell>
					<Table.HeadCell sort="vendors">Vendors</Table.HeadCell>
					<Table.HeadCell sort="people">People</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
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
