import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import LocationForm from '../Form'
import { Routes } from '@/lib'

interface INewLocationProps {
	location: Partial<Schema.Location>
	locations: Schema.Location[]
	currencies: any
}

const NewLocation = ({ ...data }: INewLocationProps) => {
	const title = 'New Location'

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title }</h1>

				<LocationForm to={ Routes.locations() } { ...data } />
			</Section>
		</>
	)
}

export default NewLocation
