import { type DataTableColumn } from "mantine-datatable"

import { Group, Link, Money } from "@/components"
import { EditButton, CheckoutButton } from "@/components/Button"
import { Routes } from "@/lib"

const componentsColumns: DataTableColumn<Schema.ComponentsIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (component) => <Link href={ Routes.component({ id: component.id }) }>{ component.name }</Link>,
	},
	{
		accessor: "model.name",
		title: "Model",
		sortable: true,
		render: (component) => component?.model?.slug ? <Link href={ Routes.model(component.model.slug) }>{ component.model.name }</Link> : null,
	},
	{
		accessor: "serial",
		title: "Serial",
		sortable: true,
		render: (component) => <Link href={ Routes.component({ id: component.id }) }>{ component.serial }</Link>,
	},
	{
		accessor: "category.name",
		title: "Category",
		sortable: true,
		render: (component) => component?.category?.slug ? <Link href={ Routes.category(component.category.slug) }>{ component.category.name }</Link> : null,
	},
	{
		accessor: "manufacturer.name",
		title: "Manufacturer",
		sortable: true,
		render: (component) => component?.manufacturer?.slug ? <Link href={ Routes.manufacturer(component.manufacturer.slug) }>{ component.manufacturer.name }</Link> : null,
	},
	{
		accessor: "vendor.name",
		title: "Vendor",
		sortable: true,
		render: (component) => component?.vendor?.slug ? <Link href={ Routes.vendor(component.vendor.slug) }>{ component.vendor.name }</Link> : null,
	},
	{
		accessor: "cost",
		title: "Cost",
		sortable: true,
		render: (component) => <Money currency={ component.cost_currency }>{ component.cost }</Money>,
	},
	{
		accessor: "qty",
		title: "Avail. / Qty",
		sortable: true,
		render: (component) => `${component.qty_available} / ${component.qty}`,
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
		render: (component) => (
			<Group wrap="nowrap" gap="sm" justify="flex-end">
				<CheckoutButton
					href={ Routes.checkoutComponent({ id: component.id }) }
					disabled={ component.qty_available < 1 }
					tooltipMessage={ component.qty_available < 1 && "There are none to checkout" }
					label={ component.name }
				/>
				<EditButton href={ Routes.editComponent({ id: component.id }) } label={ component.name } />
			</Group>
		),
	},
]

import { Table } from "@/components"

interface ComponentsTableProps {
	records: Schema.ComponentsIndex[]
	pagination: Schema.Pagination
	model: string
}

const ComponentsTable = ({ records, pagination, model }: ComponentsTableProps) => {
	return (
		<Table.DataTable
			columns={ componentsColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default ComponentsTable
