import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import AccessoryForm from '../Form'
import { Routes } from '@/lib'

interface INewAccessoryProps {
	accessory: Schema.Accessory
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const NewAccessory = ({ ...data }: INewAccessoryProps) => {
	const title = 'New Accessory'

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<AccessoryForm to={ Routes.accessories() } { ...data } />
			</section>
		</>
	)
}

export default NewAccessory
