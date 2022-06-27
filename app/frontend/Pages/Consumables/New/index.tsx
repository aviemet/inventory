import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import ConsumableForm from '../Form'
import { Routes } from '@/lib'

interface INewConsumableProps {
	consumable: Schema.Consumable
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const NewConsumable = ({ ...data }: INewConsumableProps) => {
	const title = 'New Consumable'

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title } for { user.active_company!.name }</h1>

				<ConsumableForm to={ Routes.consumables() } { ...data } />
			</Section>
		</>
	)
}

export default NewConsumable
