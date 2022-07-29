import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import ItemForm from '../Form'
import { Routes } from '@/lib'

interface INewItemProps {
	item: Schema.Item
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const NewItem = ({ ...data }: INewItemProps) => {
	const title = 'New Hardware Asset'

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title } for { user.active_company!.name }</h1>

				<ItemForm to={ Routes.items() } { ...data } />
			</Section>
		</>
	)
}

export default NewItem
