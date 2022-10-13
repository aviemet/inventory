import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ItemForm from '../Form'
import { Routes } from '@/lib'

interface INewItemProps {
	item: Schema.Item
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
	manufacturers: Schema.Manufacturer[]
	categories: Schema.Category[]
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
