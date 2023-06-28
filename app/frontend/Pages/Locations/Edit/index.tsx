import React from 'react'
import { Heading, Page, Section } from '@/Components'
import LocationForm from '../Form'
import { Routes } from '@/lib'

interface IEditLocationProps {
	location: Schema.LocationsEdit
	locations: Schema.LocationsOptions[]
	currencies: any
}

const EditLocation = ({ location, ...models }: IEditLocationProps) => {
	const title = 'Edit Location'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Locations', href: Routes.locations() },
			{ title: location.name!, href: Routes.location(location) },
			{ title: 'Edit Location' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<LocationForm
					to={ Routes.location(location.slug) }
					method="patch"
					location={ location }
					{ ...models }
				/>
			</Section>
		</Page>
	)
}

export default EditLocation
