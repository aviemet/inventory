import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Section, Breadcrumbs } from '@/Components'
import AccessoryForm from '../Form'
import { Routes } from '@/lib'
import { breadcrumbs } from '../utils'

interface INewAccessoryProps {
	accessory: Schema.Accessory
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
	manufacturers: Schema.Manufacturer[]
	categories: Schema.Category[]
}

const NewAccessory = ({ ...data }: INewAccessoryProps) => {
	const title = 'New Accessory'

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<Breadcrumbs>{ breadcrumbs.new() }</Breadcrumbs>

			<Section>
				<h1>{ title } for { user.active_company!.name }</h1>

				<AccessoryForm to={ Routes.accessories() } { ...data } />
			</Section>
		</>
	)
}

export default NewAccessory
