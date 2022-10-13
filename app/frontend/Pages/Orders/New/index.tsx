import React from 'react'
import { Heading, Page, Section } from '@/Components'
import OrderForm from '../Form'
import { Routes } from '@/lib'

interface INewOrderProps {
	order: Schema.Order
	vendors: Schema.Vendor[]
}

const NewOrder = ({ ...data }: INewOrderProps) => {
	const title = 'New Purchase Order'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Orders', href: Routes.orders() },
			{ title: 'New Order' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<OrderForm to={ Routes.orders() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewOrder
