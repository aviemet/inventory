import React from "react"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const DepartmentsTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="items">Assets</Table.HeadCell>
					<Table.HeadCell sort="accessories">Accessories</Table.HeadCell>
					<Table.HeadCell sort="consumables">Consumables</Table.HeadCell>
					<Table.HeadCell sort="components">Components</Table.HeadCell>
					<Table.HeadCell sort="licenses">Licenses</Table.HeadCell>
					<Table.HeadCell sort="people">People</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (department: Schema.DepartmentsIndex) => (
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
