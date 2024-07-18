import React from 'react'
import { Title, Page, Section } from '@/Components'
import ItemForm from '../Form'
import { Routes } from '@/lib'

interface UpdateItemProps{
	item: Schema.ItemsEdit
}

const EditItem = ({ item }: UpdateItemProps) => {
	const title = `Edit ${item.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Hardware', href: Routes.items() },
			{ title: item.name!, href: Routes.item(item) },
			{ title: 'Edit Hardware', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<ItemForm to={ Routes.item(item) } method="patch" item={ item } />
			</Section>
		</Page>
	)
}

export default EditItem
