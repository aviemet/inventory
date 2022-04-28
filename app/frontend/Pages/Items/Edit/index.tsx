import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import ItemForm from '../Form'
import { Routes } from '@/lib'
import { useAuth } from '@/Providers'

interface IUpdateItemProps{
	item: Schema.Item
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const New = ({ item, ...models }: IUpdateItemProps) => {
	const title = `Edit ${item.name}`

	const { user } = useAuth()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<ItemForm to={ Routes.item(item) } method="PATCH" item={ item } { ...models } />
			</section>
		</>
	)
}

export default New
