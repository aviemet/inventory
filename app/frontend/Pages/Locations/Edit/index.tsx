import React from 'react'
import { Head } from '@inertiajs/inertia-react'
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

			<section className="container">
				<h1>{ title }</h1>

				<LocationForm to={ Routes.location(location.slug) } method="patch" location={ location } { ...models } />
			</section>
		</>
	)
}

export default EditLocation
