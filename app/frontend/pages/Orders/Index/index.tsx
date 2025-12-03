import { NewIcon } from "@/components/Icons"
import OrdersTable, { ordersColumns } from "@/domains/Orders/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


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
			columns={ ordersColumns }
			pagination={ pagination }
			deleteRoute={ Routes.orders() }
			menuOptions={ [
				{ label: "New Order", href: Routes.newOrder(), icon: <NewIcon /> },
			] }
		>
			<OrdersTable records={ orders } pagination={ pagination } model="orders" />
		</IndexPageTemplate>
	)
}

export default OrdersIndex
