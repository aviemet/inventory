import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import ConsumableForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateConsumableProps{
	consumable: Schema.Consumable
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const EditConsumable = ({ consumable, ...models }: IUpdateConsumableProps) => {
	const title = `Edit ${consumable.name}`

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<ConsumableForm to={ Routes.consumable(consumable) } method="patch" consumable={ consumable } { ...models } />
			</section>
		</>
	)
}

export default EditConsumable
