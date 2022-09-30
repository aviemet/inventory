import React from 'react'
import { Routes, formatter } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'
import { type OrderWithCost } from './Index'

const OrdersTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="number">Order #</Table.Cell>
					<Table.Cell sort="vendor.name">Vendor</Table.Cell>
					<Table.Cell sort="cost">Total</Table.Cell>
					<Table.Cell sort="ordered_at">Purchase Date</Table.Cell>
					<Table.Cell sort="delivered_at">Received Date</Table.Cell>
					<Table.Cell className="text-right">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (order: OrderWithCost) => (
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
							{ formatter.currency(order.cost) }
						</Table.Cell>

						<Table.Cell nowrap>
							{ order.ordered_at && formatter.date.short(order.ordered_at) }
						</Table.Cell>

						<Table.Cell nowrap>
							{ order.delivered_at && formatter.date.short(order.delivered_at) }
						</Table.Cell>

						<Table.Cell className="table-column-fit">
							<EditButton href={ Routes.editOrder(order) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default OrdersTable
