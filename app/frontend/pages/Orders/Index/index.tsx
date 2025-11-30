import React from "react"

import { NewIcon } from "@/components/Icons"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import OrdersTable from "../Table"

interface OrdersIndexProps {
	orders: Schema.OrdersIndex[]
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
				{ label: "New Order", href: Routes.newOrder(), icon: <NewIcon /> },
			] }
		>
			<OrdersTable />
		</IndexPageTemplate>
	)
}

export default OrdersIndex
