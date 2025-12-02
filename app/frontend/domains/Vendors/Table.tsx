import { createColumnHelper } from "@tanstack/react-table"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.VendorsIndex>()

export const vendorsColumns = [
	columnHelper.accessor("name", {
		header: "Name",
		enableSorting: true,
		meta: {
			model: "name",
			hideable: false,
		},
	}),
	columnHelper.accessor("url", {
		header: "Website",
		enableSorting: true,
		meta: {
			model: "url",
			hideable: "url",
		},
	}),
	columnHelper.display({
		id: "contracts",
		header: "Contracts",
		enableSorting: false,
		meta: {
			hideable: "contracts",
		},
	}),
	columnHelper.display({
		id: "items",
		header: "Items",
		enableSorting: false,
		meta: {
			hideable: "items",
		},
	}),
	columnHelper.display({
		id: "accessories",
		header: "Accessories",
		enableSorting: false,
		meta: {
			hideable: "accessories",
		},
	}),
	columnHelper.display({
		id: "consumables",
		header: "Consumables",
		enableSorting: false,
		meta: {
			hideable: "consumables",
		},
	}),
	columnHelper.display({
		id: "components",
		header: "Components",
		enableSorting: false,
		meta: {
			hideable: "components",
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

const VendorsTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="url" />
					<Table.HeadCell columnId="contracts" />
					<Table.HeadCell columnId="items" />
					<Table.HeadCell columnId="accessories" />
					<Table.HeadCell columnId="consumables" />
					<Table.HeadCell columnId="components" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (vendor: Schema.VendorsIndex) => (
					<Table.Row key={ vendor.id }>

						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.vendor(vendor.slug) }>{ vendor.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="url" nowrap>
							{ vendor.url && <Link href={ vendor.url }>
								{ vendor.url }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="contracts" nowrap>
							{ vendor.contracts && <Link href={ Routes.contracts() }>{ vendor.contracts.length }</Link> }
						</Table.Cell>

						<Table.Cell columnId="items" nowrap>
							{ vendor.items && <Link href={ Routes.items() }>{ vendor.items.length }</Link> }
						</Table.Cell>

						<Table.Cell columnId="accessories" nowrap>
							{ vendor.accessories && <Link href={ Routes.accessories() }>{ vendor.accessories.length }</Link> }
						</Table.Cell>

						<Table.Cell columnId="consumables" nowrap>
							{ vendor.consumables && <Link href={ Routes.consumables() }>{ vendor.consumables.length }</Link> }
						</Table.Cell>

						<Table.Cell columnId="components" nowrap>
							{ vendor.components && <Link href={ Routes.components() }>{ vendor.components.length }</Link> }
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editVendor(vendor.slug) } label={ vendor.name } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default VendorsTable
