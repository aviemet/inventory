import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import LocationForm from '../Form'
import { Routes } from '@/lib'

interface IEditLocationProps {
	location: Schema.Location
	locations: Schema.Location[]
	currencies: any
}

const EditLocation = ({ location, ...models }: IEditLocationProps) => {
	const title = 'Edit Location'

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title }</h1>

				<LocationForm to={ Routes.location(location.slug) } method="patch" location={ location } { ...models } />
			</Section>
		</>
	)
}

export default EditLocation
