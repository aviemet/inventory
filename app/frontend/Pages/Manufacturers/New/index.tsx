import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ManufacturerForm from '../Form'
import { Routes } from '@/lib'

interface NewManufacturerProps {
	manufacturer: Schema.ManufacturersFormData
}

const New = ({ ...data }: NewManufacturerProps) => {
	const title = 'New Manufacturer'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Manufacturers', href: Routes.manufacturers() },
			{ title: 'New Manufacturer' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ManufacturerForm to={ Routes.manufacturers() } { ...data } />
			</Section>
		</Page>
	)
}

export default New
