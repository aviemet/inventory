import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
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

			<Section>
				<h1>{ title } for { user.active_company!.name }</h1>

				<AccessoryForm to={ Routes.accessory(accessory) } method="patch" accessory={ accessory } { ...models } />
			</Section>
		</>
	)
}

export default EditAccessory
