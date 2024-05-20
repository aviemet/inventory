import React from 'react'
import { Heading, Page, Section } from '@/Components'
import OrderForm from '../Form'
import { Routes } from '@/lib'

interface NewOrderProps {
	order: Schema.Order
}

const NewOrder = ({ order }: NewOrderProps) => {
	const title = 'New Purchase Order'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Orders', href: Routes.orders() },
			{ title: 'New Order' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<OrderForm to={ Routes.orders() } order={ order } />
			</Section>
		</Page>
	)
}

export default NewOrder
