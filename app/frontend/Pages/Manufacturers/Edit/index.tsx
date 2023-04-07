import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ManufacturerForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateManufacturerProps{
	manufacturer: Schema.Manufacturer
}

const New = ({ manufacturer, ...models }: IUpdateManufacturerProps) => {
	const title = `Edit ${manufacturer.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Manufacturers', href: Routes.manufacturers() },
			{ title: manufacturer.name!, href: Routes.manufacturer(manufacturer.slug) },
			{ title: 'Edit Manufacturer' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ManufacturerForm to={ Routes.manufacturer(manufacturer) } method="patch" manufacturer={ manufacturer } { ...models } />
			</Section>
		</Page>
	)
}

export default New
