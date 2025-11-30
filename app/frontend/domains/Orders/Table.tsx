import { DateTimeFormatter, Link, Money, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const OrdersTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="number" sort="name" hideable={ false }>Order #</Table.HeadCell>
					<Table.HeadCell columnId="vendor" sort="vendor.name">Vendor</Table.HeadCell>
					<Table.HeadCell columnId="cost" sort="cost">Total</Table.HeadCell>
					<Table.HeadCell columnId="ordered_at" sort="ordered_at">Purchase Date</Table.HeadCell>
					<Table.HeadCell columnId="delivered_at" sort="delivered_at">Received Date</Table.HeadCell>
					<Table.HeadCell columnId="actions" className="text-right">Actions</Table.HeadCell>
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
