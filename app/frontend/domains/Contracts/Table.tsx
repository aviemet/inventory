import { createColumnHelper } from "@tanstack/react-table"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes, formatter } from "@/lib"

const columnHelper = createColumnHelper<Schema.ContractsIndex>()

export const contractsColumns = [
	columnHelper.accessor("name", {
		header: "Name",
		enableSorting: true,
		meta: {
			model: "name",
			hideable: false,
		},
	}),
	columnHelper.accessor("number", {
		header: "#",
		enableSorting: true,
		meta: {
			model: "number",
			hideable: "number",
		},
	}),
	columnHelper.accessor("begins_at", {
		header: "Start Date",
		enableSorting: true,
		meta: {
			model: "begins_at",
			hideable: "begins_at",
		},
	}),
	columnHelper.accessor("ends_at", {
		header: "End Date",
		enableSorting: true,
		meta: {
			model: "ends_at",
			hideable: "ends_at",
		},
	}),
	columnHelper.accessor(row => row.vendor?.name, {
		id: "vendor",
		header: "Vendor",
		enableSorting: true,
		meta: {
			model: "vendor.name",
			hideable: "vendor",
		},
	}),
	columnHelper.accessor(row => row.category?.name, {
		id: "category",
		header: "Category",
		enableSorting: true,
		meta: {
			model: "category.name",
			hideable: "category",
		},
	}),
	columnHelper.display({
		id: "actions",
		header: "Actions",
		enableSorting: false,
		meta: {
			hideable: false,
		},
	}),
]

const ContractsTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="number" />
					<Table.HeadCell columnId="begins_at" />
					<Table.HeadCell columnId="ends_at" />
					<Table.HeadCell columnId="vendor" />
					<Table.HeadCell columnId="category" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
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
