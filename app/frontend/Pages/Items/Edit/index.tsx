import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ItemForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateItemProps{
	item: Schema.ItemsEdit
	models: Schema.ModelsOptions[]
	vendors: Schema.VendorsOptions[]
	locations: Schema.LocationsOptions[]
	manufacturers: Schema.ManufacturersOptions[]
	categories: Schema.CategoriesOptions[]
}

const EditItem = ({ item, ...models }: IUpdateItemProps) => {
	const title = `Edit ${item.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Hardware', href: Routes.items() },
			{ title: item.name!, href: Routes.item(item) },
			{ title: 'Edit Hardware' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ItemForm to={ Routes.item(item) } method="patch" item={ item } { ...models } />
			</Section>
		</Page>
	)
}

export default EditItem
