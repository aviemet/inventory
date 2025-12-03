import { type DataTableColumn } from "mantine-datatable"

import { Group, Link, Money, Table } from "@/components"
import { EditButton, CheckoutButton } from "@/components/Button"
import { Routes } from "@/lib"

import { ReplenishButton } from "./ReplenishButton"

export const consumablesColumns: DataTableColumn<Schema.ConsumablesIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (consumable) => <Link href={ Routes.consumable(consumable) }>{ consumable.name }</Link>,
	},
	{
		accessor: "model.name",
		title: "Model",
		sortable: true,
		render: (consumable) => <Link href={ Routes.consumable(consumable) }>{ consumable.model?.name }</Link>,
	},
	{
		accessor: "category.name",
		title: "Category",
		sortable: true,
		render: (consumable) => <Link href={ Routes.consumable(consumable) }>{ consumable.category?.name }</Link>,
	},
	{
		accessor: "manufacturer.name",
		title: "Manufacturer",
		sortable: true,
		render: (consumable) => <Link href={ Routes.consumable(consumable) }>{ consumable.manufacturer?.name }</Link>,
	},
	{
		accessor: "vendor.name",
		title: "Vendor",
		sortable: true,
		render: (consumable) => <Link href={ Routes.consumable(consumable) }>{ consumable.vendor?.name }</Link>,
	},
	{
		accessor: "cost",
		title: "Cost",
		sortable: true,
		render: (consumable) => <Money currency={ consumable.cost_currency }>{ consumable.cost }</Money>,
	},
	{
		accessor: "qty",
		title: "Qty",
		sortable: true,
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
		render: (consumable) => (
			<Group wrap="nowrap" gap="sm" justify="flex-end">
				<CheckoutButton
					href={ Routes.checkoutConsumable(consumable) }
					disabled={ consumable.qty_available < 1 }
					tooltipMessage={ consumable.qty_available < 1 && "There are none to checkout" }
					label={ consumable.name }
				/>
				<ReplenishButton consumable={ consumable } />
				<EditButton
					href={ Routes.editConsumable(consumable) }
					label={ consumable.name }
				/>
			</Group>
		),
	},
]


interface ConsumablesTableProps {
	records: Schema.ConsumablesIndex[]
	pagination: Schema.Pagination
	model: string
}

const ConsumablesTable = ({ records, pagination, model }: ConsumablesTableProps) => {
	return (
		<Table.DataTable
			columns={ consumablesColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default ConsumablesTable
