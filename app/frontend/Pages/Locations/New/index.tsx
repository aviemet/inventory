import React from 'react'
import { Heading, Page, Section } from '@/Components'
import LocationForm from '../Form'
import { Routes } from '@/lib'

interface NewLocationProps {
	location: Schema.LocationsFormData
}

const NewLocation = ({ location }: NewLocationProps) => {
	const title = 'New Location'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Locations', href: Routes.locations() },
			{ title: 'New Location', href: window.location.href },
		] }>

			<Section>
				<Title>{ title }</Title>

				<LocationForm to={ Routes.locations() } location={ location } />
			</Section>

		</Page>
	)
}

export default NewLocation
