import React from "react"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes, formatter } from "@/lib"

const ContractsTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="number">#</Table.HeadCell>
					<Table.HeadCell sort="begins_at">Start Date</Table.HeadCell>
					<Table.HeadCell sort="ends_at">End Date</Table.HeadCell>
					<Table.HeadCell sort="vendor.name">Vendor</Table.HeadCell>
					<Table.HeadCell sort="category.name">Category</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
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
							{ contract?.vendor?.slug && <Link href={ Routes.vendor(contract.vendor.slug) }>
								{ contract.vendor?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							{ contract.category && <Link href={ Routes.category(contract.category) }>
								{ contract.category?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editContract(contract.slug) } label={ contract.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ContractsTable
