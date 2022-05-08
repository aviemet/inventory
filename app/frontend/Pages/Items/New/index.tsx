import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import ItemForm from '../Form'
import { Routes } from '@/lib'

interface INewItemProps {
	item: Schema.Item
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const New = ({ ...data }: INewItemProps) => {
	const title = 'New Hardware Asset'

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<ItemForm to={ Routes.items() } { ...data } />
			</section>
		</>
	)
}

export default New
