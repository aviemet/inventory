import React from 'react'
import { Heading, Page, Section } from '@/Components'
import CategoryForm from '../Form'
import { Routes } from '@/lib'

interface UpdateCategoryProps{
	category: Schema.CategoriesEdit
}

const EditCategory = ({ category, ...models }: UpdateCategoryProps) => {
	const title = `Edit ${category.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Categories', href: Routes.categories() },
			{ title: category.name!, href: Routes.category(category.slug) },
			{ title: 'Edit Category' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<CategoryForm to={ Routes.category(category.slug) } method="patch" category={ category } />
			</Section>
		</Page>
	)
}

export default EditCategory
