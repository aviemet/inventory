import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import OrdersTable from '../Table'

export type OrderWithCost = Schema.Order & { cost: number }

interface IOrdersIndexProps {
	orders: OrderWithCost[]
	pagination: Schema.Pagination
}

const OrdersIndex = ({ orders, pagination }: IOrdersIndexProps) => {
	return (
		<IndexPageTemplate
			title="Orders"
			model="orders"
			rows={ orders }
			pagination={ pagination }
			menuOptions={ [
				{ label: 'New Order', href: Routes.newOrder(), icon: NewIcon },
			] }
		>
			<OrdersTable />
		</IndexPageTemplate>
	)
}

export default OrdersIndex
