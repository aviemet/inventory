import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ItemForm from '../Form'
import { Routes } from '@/lib'

interface INewItemProps {
	item: Schema.ItemsFormData
	models: Schema.ModelsOptions[]
	vendors: Schema.VendorsOptions[]
	locations: Schema.LocationsOptions[]
	manufacturers: Schema.ManufacturersOptions[]
	categories: Schema.CategoriesOptions[]
}

const NewItem = ({ ...data }: INewItemProps) => {
	const title = 'New Hardware Asset'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Hardware', href: Routes.items() },
			{ title: 'New Hardware' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ItemForm to={ Routes.items() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewItem
