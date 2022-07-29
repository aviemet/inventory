import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import ItemForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateItemProps{
	item: Schema.Item
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const EditItem = ({ item, ...models }: IUpdateItemProps) => {
	const title = `Edit ${item.name}`

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title } for { user.active_company!.name }</h1>

				<ItemForm to={ Routes.item(item) } method="patch" item={ item } { ...models } />
			</Section>
		</>
	)
}

export default EditItem
