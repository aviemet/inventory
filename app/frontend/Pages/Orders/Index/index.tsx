import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Features'
import { NewIcon } from '@/Components/Icons'
import OrdersTable from '../Table'

export type OrderWithCost = Schema.Order & { cost: number }

interface OrdersIndexProps {
	orders: OrderWithCost[]
	pagination: Schema.Pagination
}

const OrdersIndex = ({ orders, pagination }: OrdersIndexProps) => {
	return (
		<IndexPageTemplate
			title="Orders"
			model="orders"
			rows={ orders }
			pagination={ pagination }
			deleteRoute={ Routes.orders() }
			menuOptions={ [
				{ label: 'New Order', href: Routes.newOrder(), icon: NewIcon },
			] }
		>
			<OrdersTable />
		</IndexPageTemplate>
	)
}

export default OrdersIndex
