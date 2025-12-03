import { type DataTableColumn } from "mantine-datatable"

import { DateTimeFormatter, Link, Money } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

export const ordersColumns: DataTableColumn<Schema.OrdersIndex>[] = [
	{
		accessor: "number",
		title: "Order #",
		sortable: true,
		render: (order) => <Link href={ Routes.order(order) }>{ order.number }</Link>,
	},
	{
		accessor: "vendor.name",
		title: "Vendor",
		sortable: true,
		render: (order) => order.vendor ? <Link href={ Routes.vendor(order.vendor.slug) }>{ order.vendor.name }</Link> : null,
	},
	{
		accessor: "cost",
		title: "Total",
		sortable: true,
		render: (order) => <Money>{ order.cost }</Money>,
	},
	{
		accessor: "ordered_at",
		title: "Purchase Date",
		sortable: true,
		render: (order) => <DateTimeFormatter>{ order.ordered_at }</DateTimeFormatter>,
	},
	{
		accessor: "delivered_at",
		title: "Received Date",
		sortable: true,
		render: (order) => <DateTimeFormatter>{ order.delivered_at }</DateTimeFormatter>,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (order) => <EditButton href={ Routes.editOrder(order) } label={ `Order number ${order.number}` } />,
	},
]

import { Table } from "@/components"

interface OrdersTableProps {
	records: Schema.OrdersIndex[]
	pagination: Schema.Pagination
	model: string
}

const OrdersTable = ({ records, pagination, model }: OrdersTableProps) => {
	return (
		<Table.DataTable
			columns={ ordersColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default OrdersTable
