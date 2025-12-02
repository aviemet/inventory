import { createColumnHelper } from "@tanstack/react-table"

import { Group, Link, Money, Table } from "@/components"
import { EditButton, CheckoutButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.AccessoriesIndex>()

export const accessoriesColumns = [
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
	columnHelper.accessor("serial", {
		header: "Serial",
		enableSorting: true,
		meta: {
			model: "serial",
			hideable: "serial",
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
	columnHelper.display({
		id: "qty",
		header: "Avail. / Qty",
		enableSorting: true,
		meta: {
			model: "departments.name",
			hideable: "qty",
		},
	}),
	columnHelper.display({
		id: "min_qty",
		header: "Min Qty",
		enableSorting: true,
		meta: {
			model: "departments.name",
			hideable: "min_qty",
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

const AccessoriesTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="model" />
					<Table.HeadCell columnId="serial" />
					<Table.HeadCell columnId="asset_tag" />
					<Table.HeadCell columnId="category" />
					<Table.HeadCell columnId="manufacturer" />
					<Table.HeadCell columnId="vendor" />
					<Table.HeadCell columnId="cost" />
					<Table.HeadCell columnId="qty" />
					<Table.HeadCell columnId="min_qty" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (accessory: Schema.AccessoriesIndex) => {

					return (
						<Table.Row key={ accessory.id }>

							<Table.Cell columnId="name" nowrap>
								<Link href={ Routes.accessory(accessory) }>{ accessory.name }</Link>
							</Table.Cell>

							<Table.Cell columnId="model">
								{ accessory?.model?.slug && <Link href={ Routes.model(accessory.model.slug) }>
									{ accessory.model.name }
								</Link> }
							</Table.Cell>

							<Table.Cell columnId="serial">
								<Link href={ Routes.accessory(accessory) }>{ accessory.serial }</Link>
							</Table.Cell>

							<Table.Cell columnId="asset_tag">
								<Link href={ Routes.accessory(accessory) }>{ accessory.asset_tag }</Link>
							</Table.Cell>

							<Table.Cell columnId="category">
								{ accessory?.category?.slug && <Link href={ Routes.category(accessory.category.slug) }>
									{ accessory.category.name }
								</Link> }
							</Table.Cell>

							<Table.Cell columnId="manufacturer">
								{ accessory?.manufacturer?.slug && <Link href={ Routes.manufacturer(accessory.manufacturer.slug) }>
									{ accessory.manufacturer!.name }
								</Link> }
							</Table.Cell>

							<Table.Cell columnId="vendor">
								{ accessory?.vendor?.slug && <Link href={ Routes.vendor(accessory.vendor.slug) }>
									{ accessory.vendor.name }
								</Link> }
							</Table.Cell>

							<Table.Cell columnId="cost">
								<Money currency={ accessory.cost_currency }>{ accessory.cost }</Money>
							</Table.Cell>

							<Table.Cell columnId="qty" nowrap>{ `${accessory.qty_available} / ${accessory.qty}` }</Table.Cell>

							<Table.Cell columnId="min_qty">{ accessory.min_qty }</Table.Cell>

							<Table.Cell columnId="actions" fitContent>
								<Group wrap="nowrap" gap="sm">
									<CheckoutButton
										href={ Routes.checkoutAccessory(accessory) }
										disabled={ accessory.qty_available < 1 }
										tooltipMessage={ accessory.qty_available < 1 && "None available to checkout" }
										label={ accessory.name }
									/>

									<EditButton href={ Routes.editAccessory(accessory) } label={ accessory.name } />
								</Group>
							</Table.Cell>

						</Table.Row>
					)
				} } />
			</Table.Body>
		</Table>
	)
}

export default AccessoriesTable
