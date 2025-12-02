import { createColumnHelper } from "@tanstack/react-table"

import { DateTimeFormatter, Link, Money, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.OrdersIndex>()

export const ordersColumns = [
	columnHelper.accessor("number", {
		header: "Order #",
		enableSorting: true,
		meta: {
			model: "name",
			hideable: false,
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
	columnHelper.accessor("cost", {
		header: "Total",
		enableSorting: true,
		meta: {
			model: "cost",
			hideable: "cost",
		},
	}),
	columnHelper.accessor("ordered_at", {
		header: "Purchase Date",
		enableSorting: true,
		meta: {
			model: "ordered_at",
			hideable: "ordered_at",
		},
	}),
	columnHelper.accessor("delivered_at", {
		header: "Received Date",
		enableSorting: true,
		meta: {
			model: "delivered_at",
			hideable: "delivered_at",
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

const OrdersTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="number" />
					<Table.HeadCell columnId="vendor" />
					<Table.HeadCell columnId="cost" />
					<Table.HeadCell columnId="ordered_at" />
					<Table.HeadCell columnId="delivered_at" />
					<Table.HeadCell columnId="actions" className="text-right" />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (order: Schema.OrdersIndex) => (
					<Table.Row key={ order.id }>
						<Table.Cell columnId="number" nowrap>
							<Link href={ Routes.order(order) }>{ order.number }</Link>
						</Table.Cell>

						<Table.Cell columnId="vendor">
							{ order.vendor && <Link href={ Routes.vendor(order.vendor.slug) }>
								{ order.vendor?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="cost" nowrap>
							<Money>{ order.cost }</Money>
						</Table.Cell>

						<Table.Cell columnId="ordered_at" nowrap>
							<DateTimeFormatter>{ order.ordered_at }</DateTimeFormatter>
						</Table.Cell>

						<Table.Cell columnId="delivered_at" nowrap>
							<DateTimeFormatter>{ order.delivered_at }</DateTimeFormatter>
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editOrder(order) } label={ `Order number ${order.number}` } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}
export default OrdersTable
