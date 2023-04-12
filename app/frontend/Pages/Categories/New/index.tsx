import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import CategoryForm from '../Form'

interface INewCategoryProps {
	category: Schema.CategoriesFormData
	vendors: Schema.VendorsOptions[]
	categories: Schema.CategoriesOptions[]
}

const NewCategory = ({ ...data }: INewCategoryProps) => {
	const title = 'New Category'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Categories', href: Routes.categories() },
			{ title: 'New Category' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<CategoryForm to={ Routes.categories() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewCategory
