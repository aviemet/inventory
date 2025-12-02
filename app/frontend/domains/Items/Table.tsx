import { createColumnHelper } from "@tanstack/react-table"

import { Link, Table, Money, Group } from "@/components"
import { EditButton, CheckoutButton, CheckinButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.ItemsIndex>()

export const itemsColumns = [
	columnHelper.accessor("name", {
		header: "Name",
		enableSorting: true,
		meta: {
			model: "name",
			hideable: false,
		},
	}),
	columnHelper.accessor(row => row.model?.name, {
		id: "model",
		header: "Model",
		enableSorting: true,
		meta: {
			model: "models.name",
			hideable: "model",
		},
	}),
	columnHelper.accessor("asset_tag", {
		header: "Asset Tag",
		enableSorting: true,
		meta: {
			model: "asset_tag",
			hideable: "asset_tag",
		},
	}),
	columnHelper.accessor("serial", {
		header: "Serial",
		enableSorting: true,
		meta: {
			model: "serial",
			hideable: "serial",
		},
	}),
	columnHelper.accessor(row => row.category?.name, {
		id: "category",
		header: "Category",
		enableSorting: true,
		meta: {
			model: "categories.name",
			hideable: "category",
		},
	}),
	columnHelper.accessor(row => row.manufacturer?.name, {
		id: "manufacturer",
		header: "Manufacturer",
		enableSorting: true,
		meta: {
			model: "manufacturers.name",
			hideable: "manufacturer",
		},
	}),
	columnHelper.accessor(row => row.vendor?.name, {
		id: "vendor",
		header: "Vendor",
		enableSorting: true,
		meta: {
			model: "vendors.name",
			hideable: "vendor",
		},
	}),
	columnHelper.accessor("cost", {
		header: "Cost",
		enableSorting: true,
		meta: {
			model: "cost_cents",
			hideable: "cost",
		},
	}),
	columnHelper.accessor(row => row.department?.name, {
		id: "department",
		header: "Department",
		enableSorting: true,
		meta: {
			model: "departments.name",
			hideable: "department",
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

const ItemsTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="model" />
					<Table.HeadCell columnId="asset_tag" />
					<Table.HeadCell columnId="serial" />
					<Table.HeadCell columnId="category" />
					<Table.HeadCell columnId="manufacturer" />
					<Table.HeadCell columnId="vendor" />
					<Table.HeadCell columnId="cost" />
					<Table.HeadCell columnId="department" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (item: Schema.ItemsIndex) => (
					<Table.Row key={ item.id }>

						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.item(item) }>{ item.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="model" nowrap>
							{ item.model && <Link href={ Routes.model(item.model.slug) }>
								{ item.model.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="asset_tag">
							<Link href={ Routes.item(item) }>{ item.asset_tag }</Link>
						</Table.Cell>

						<Table.Cell columnId="serial">
							<Link href={ Routes.item(item) }>{ item.serial }</Link>
						</Table.Cell>

						<Table.Cell columnId="category">
							{ item.category && <Link href={ Routes.category(item.category.slug) }>
								{ item.category.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="manufacturer">
							<Link href={ Routes.item(item) }>{ item.manufacturer?.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="vendor">
							{ item.vendor && <Link href={ Routes.vendor(item.vendor.slug) }>
								{ item.vendor.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="cost">
							<Money accounting>{ item.cost }</Money>
						</Table.Cell>

						<Table.Cell columnId="department">
							{ item.department && <Link href={ Routes.department(item.department) }>
								{ item.department?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<Group wrap="nowrap" gap="sm">
								{ item.assigned ?
									<CheckinButton href={ Routes.checkinItem(item) } label={ item.name } />
									:
									<CheckoutButton href={ Routes.checkoutItem(item) } label={ item.name } />
								}
								<EditButton href={ Routes.editItem(item) } label={ item.name } />
							</Group>
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ItemsTable
