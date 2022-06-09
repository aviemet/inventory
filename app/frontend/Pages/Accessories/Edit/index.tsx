import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import AccessoryForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateAccessoryProps{
	accessory: Schema.Accessory
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const EditAccessory = ({ accessory, ...models }: IUpdateAccessoryProps) => {
	const title = `Edit ${accessory.name}`

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<AccessoryForm to={ Routes.accessory(accessory) } method="patch" accessory={ accessory } { ...models } />
			</section>
		</>
	)
}

export default EditAccessory
