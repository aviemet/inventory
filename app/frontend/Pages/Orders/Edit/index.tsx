import React from 'react'
import { Title, Page, Section } from '@/components'
import OrderForm from '../Form'
import { Routes } from '@/lib'

interface UpdateOrderProps{
	order: Schema.OrdersEdit
}

const EditOrder = ({ order  }: UpdateOrderProps) => {
	const title = 'Edit Order'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Order', href: Routes.orders() },
			{ title: String(order.id), href: Routes.order(order) },
			{ title: 'Edit Order', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<OrderForm to={ Routes.order(order) } method="patch" order={ order } />
			</Section>
		</Page>
	)
}

export default EditOrder
