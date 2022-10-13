import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ItemForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateItemProps{
	item: Schema.Item
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
	manufacturers: Schema.Manufacturer[]
	categories: Schema.Category[]
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
