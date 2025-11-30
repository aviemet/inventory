import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes, formatter } from "@/lib"

const ContractsTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell columnId="number" sort="number">#</Table.HeadCell>
					<Table.HeadCell columnId="begins_at" sort="begins_at">Start Date</Table.HeadCell>
					<Table.HeadCell columnId="ends_at" sort="ends_at">End Date</Table.HeadCell>
					<Table.HeadCell columnId="vendor" sort="vendor.name">Vendor</Table.HeadCell>
					<Table.HeadCell columnId="category" sort="category.name">Category</Table.HeadCell>
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (contract: Schema.ContractsIndex) => (
					<Table.Row key={ contract.id }>
						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.contract(contract.slug) }>{ contract.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="number" nowrap>
							<Link href={ Routes.contract(contract.slug) }>{ contract.number }</Link>
						</Table.Cell>

						<Table.Cell columnId="begins_at" nowrap>
							{ contract.begins_at && formatter.date.short(contract.begins_at) }
						</Table.Cell>

						<Table.Cell columnId="ends_at" nowrap>
							{ contract.ends_at && formatter.date.short(contract.ends_at) }
						</Table.Cell>

						<Table.Cell columnId="vendor">
							{ contract?.vendor?.slug && <Link href={ Routes.vendor(contract.vendor.slug) }>
								{ contract.vendor?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="category">
							{ contract.category && <Link href={ Routes.category(contract.category) }>
								{ contract.category?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editContract(contract.slug) } label={ contract.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ContractsTable
