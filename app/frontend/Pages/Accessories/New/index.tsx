import React from 'react'
import { Section, Page, Heading } from '@/Components'
import AccessoryForm from '../Form'
import { Routes } from '@/lib'

interface INewAccessoryProps {
	accessory: Schema.AccessoriesFormData
	models: Schema.ModelsOptions[]
	vendors: Schema.VendorsOptions[]
	locations: Schema.LocationsOptions[]
	manufacturers: Schema.ManufacturersOptions[]
	categories: Schema.CategoriesOptions[]
}

const NewAccessory = ({ ...data }: INewAccessoryProps) => {
	const title = 'New Accessory'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Accessories', href: Routes.accessories() },
			{ title: 'New Accessory' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<AccessoryForm to={ Routes.accessories() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewAccessory
