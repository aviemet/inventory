import React from "react"

import { Date, Link, Money, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const OrdersTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Order #</Table.HeadCell>
					<Table.HeadCell sort="vendor.name">Vendor</Table.HeadCell>
					<Table.HeadCell sort="cost">Total</Table.HeadCell>
					<Table.HeadCell sort="ordered_at">Purchase Date</Table.HeadCell>
					<Table.HeadCell sort="delivered_at">Received Date</Table.HeadCell>
					<Table.HeadCell className="text-right">Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (order: Schema.OrdersIndex) => (
					<Table.Row key={ order.id }>
						<Table.Cell nowrap>
							<Link href={ Routes.order(order) }>{ order.number }</Link>
						</Table.Cell>

						<Table.Cell>
							{ order.vendor && <Link href={ Routes.vendor(order.vendor.slug) }>
								{ order.vendor?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell nowrap>
							<Money>{ order.cost }</Money>
						</Table.Cell>

						<Table.Cell nowrap>
							<Date>{ order.ordered_at }</Date>
						</Table.Cell>

						<Table.Cell nowrap>
							<Date>{ order.delivered_at }</Date>
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editOrder(order) } label={ `Order number ${order.number}` } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}
export default OrdersTable
