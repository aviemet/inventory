import React from 'react'
import { Heading, Page, Section } from '@/Components'
import LocationForm from '../Form'
import { Routes } from '@/lib'

interface INewLocationProps {
	location: Schema.LocationsFormData
	locations: Schema.LocationsOptions[]
	currencies: any
}

const NewLocation = ({ ...data }: INewLocationProps) => {
	const title = 'New Location'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Locations', href: Routes.locations() },
			{ title: 'New Location' },
		] }>

			<Section>
				<Heading>{ title }</Heading>

				<LocationForm to={ Routes.locations() } { ...data } />
			</Section>

		</Page>
	)
}

export default NewLocation
