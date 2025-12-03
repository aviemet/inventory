import { type DataTableColumn } from "mantine-datatable"

import { Group, Link, Money } from "@/components"
import { EditButton, CheckoutButton } from "@/components/Button"
import { Routes } from "@/lib"

export const accessoriesColumns: DataTableColumn<Schema.AccessoriesIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (accessory) => <Link href={ Routes.accessory(accessory) }>{ accessory.name }</Link>,
	},
	{
		accessor: "model.name",
		title: "Model",
		sortable: true,
		render: (accessory) => accessory?.model?.slug ? <Link href={ Routes.model(accessory.model.slug) }>{ accessory.model.name }</Link> : null,
	},
	{
		accessor: "serial",
		title: "Serial",
		sortable: true,
		render: (accessory) => <Link href={ Routes.accessory(accessory) }>{ accessory.serial }</Link>,
	},
	{
		accessor: "asset_tag",
		title: "Asset Tag",
		sortable: true,
		render: (accessory) => <Link href={ Routes.accessory(accessory) }>{ accessory.asset_tag }</Link>,
	},
	{
		accessor: "category.name",
		title: "Category",
		sortable: true,
		render: (accessory) => accessory?.category?.slug ? <Link href={ Routes.category(accessory.category.slug) }>{ accessory.category.name }</Link> : null,
	},
	{
		accessor: "manufacturer.name",
		title: "Manufacturer",
		sortable: true,
		render: (accessory) => accessory?.manufacturer?.slug ? <Link href={ Routes.manufacturer(accessory.manufacturer.slug) }>{ accessory.manufacturer.name }</Link> : null,
	},
	{
		accessor: "vendor.name",
		title: "Vendor",
		sortable: true,
		render: (accessory) => accessory?.vendor?.slug ? <Link href={ Routes.vendor(accessory.vendor.slug) }>{ accessory.vendor.name }</Link> : null,
	},
	{
		accessor: "cost",
		title: "Cost",
		sortable: true,
		render: (accessory) => <Money currency={ accessory.cost_currency }>{ accessory.cost }</Money>,
	},
	{
		accessor: "qty",
		title: "Avail. / Qty",
		sortable: true,
		render: (accessory) => `${accessory.qty_available} / ${accessory.qty}`,
	},
	{
		accessor: "min_qty",
		title: "Min Qty",
		sortable: true,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (accessory) => (
			<Group wrap="nowrap" gap="sm" justify="flex-end">
				<CheckoutButton
					href={ Routes.checkoutAccessory(accessory) }
					disabled={ accessory.qty_available < 1 }
					tooltipMessage={ accessory.qty_available < 1 && "None available to checkout" }
					label={ accessory.name }
				/>
				<EditButton href={ Routes.editAccessory(accessory) } label={ accessory.name } />
			</Group>
		),
	},
]

import { Table } from "@/components"

interface AccessoriesTableProps {
	records: Schema.AccessoriesIndex[]
	pagination: Schema.Pagination
	model: string
}

const AccessoriesTable = ({ records, pagination, model }: AccessoriesTableProps) => {
	return (
		<Table.DataTable
			columns={ accessoriesColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default AccessoriesTable
