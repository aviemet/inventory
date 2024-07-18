import React from 'react'
import { Title, Page, Section } from '@/Components'
import LocationForm from '../Form'
import { Routes } from '@/lib'

interface EditLocationProps {
	location: Schema.LocationsEdit
}

const EditLocation = ({ location }: EditLocationProps) => {
	const title = 'Edit Location'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Locations', href: Routes.locations() },
			{ title: location.name!, href: Routes.location(location) },
			{ title: 'Edit Location', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<LocationForm
					to={ Routes.location(location.slug) }
					method="patch"
					location={ location }
				/>
			</Section>
		</Page>
	)
}

export default EditLocation
