import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import ItemForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateItemProps{
	item: Schema.Item
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const New = ({ item, ...models }: IUpdateItemProps) => {
	const title = `Edit ${item.name}`

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<ItemForm to={ Routes.item(item) } method="patch" item={ item } { ...models } />
			</section>
		</>
	)
}

export default New
