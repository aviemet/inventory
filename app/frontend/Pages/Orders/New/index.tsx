import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Heading, Section } from '@/Components'
import OrderForm from '../Form'
import { Routes } from '@/lib'

interface INewOrderProps {
	order: Schema.Order
	vendors: Schema.Vendor[]
}

const NewOrder = ({ ...data }: INewOrderProps) => {
	const title = 'New Purchase Order'

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Heading>{ title } for { user.active_company!.name }</Heading>

				<OrderForm to={ Routes.items() } { ...data } />
			</Section>
		</>
	)
}

export default NewOrder
