import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Option } from '@/Components/Popover'
import { EditButton } from '@/Components/Button'
import {
	TableSection,
	TableTitleSection,
} from '@/Components/Layout/IndexPageComponents'

type OrderWithCost = Schema.Order & { cost: number }

interface IOrdersIndexProps {
	orders: OrderWithCost[]
	pagination: Schema.Pagination
}

const OrdersIndex = ({ orders, pagination }: IOrdersIndexProps) => {
	const title = 'Orders'

	return (
		<>
			<Head title={ title }></Head>

			<TableSection>
				<Table.TableProvider
					selectable
					hideable
					model="orders"
					rows={ orders }
					pagination={ pagination }
				>

					<TableTitleSection
						title={ title }
						popover={
							<Popover>
								<Option href={ Routes.newPerson() }>
									Start New Order
								</Option>
							</Popover>
						}
					/>

					<div className="scroll-content h-full">
						<Table.Table fixed={ false }>
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
								<Table.RowIterator render={ order => (
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

										<Table.Cell className="table-column-fit text-right">
											<EditButton href={ Routes.editOrder(order) } />
										</Table.Cell>
									</Table.Row>
								) } />
							</Table.Body>
						</Table.Table>
					</div>
					<Table.Pagination />
				</Table.TableProvider>
			</TableSection>
		</>
	)
}

export default OrdersIndex
