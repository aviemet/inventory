import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import CategoryForm from '../Form'

interface NewCategoryProps {
	category: Schema.CategoriesFormData
}

const NewCategory = ({ category }: NewCategoryProps) => {
	const title = 'New Category'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Categories', href: Routes.categories() },
			{ title: 'New Category' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<CategoryForm to={ Routes.categories() } category={ category } />
			</Section>
		</Page>
	)
}

export default NewCategory
