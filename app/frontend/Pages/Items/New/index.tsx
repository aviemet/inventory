import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ItemForm from '../Form'
import { Routes } from '@/lib'

interface NewItemProps {
	item: Schema.ItemsFormData
}

const NewItem = ({ item }: NewItemProps) => {
	const title = 'New Hardware Asset'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Hardware', href: Routes.items() },
			{ title: 'New Hardware', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>
				<ItemForm to={ Routes.items() } item={ item } />
			</Section>
		</Page>
	)
}

export default NewItem
