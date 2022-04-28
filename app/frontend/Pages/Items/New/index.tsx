import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import ItemForm from '../Form'
import { Routes } from '@/lib'
import { useAuth } from '@/Providers'

interface INewItemProps {
	item: Schema.Item
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const New = ({ ...data }: INewItemProps) => {
	const title = 'New Hardware Asset'

	const { user } = useAuth()

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
