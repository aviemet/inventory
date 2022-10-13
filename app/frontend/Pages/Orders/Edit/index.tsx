import React from 'react'
import { Heading, Page, Section } from '@/Components'
import OrderForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateOrderProps{
	order: Schema.Order
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
	manufacturers: Schema.Manufacturer[]
	categories: Schema.Category[]
}

const EditOrder = ({ order, ...models }: IUpdateOrderProps) => {
	const title = 'Edit Order'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Order', href: Routes.orders() },
			{ title: String(order.id), href: Routes.order(order) },
			{ title: 'Edit Order' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<OrderForm to={ Routes.order(order) } method="patch" order={ order } { ...models } />
			</Section>
		</Page>
	)
}

export default EditOrder
