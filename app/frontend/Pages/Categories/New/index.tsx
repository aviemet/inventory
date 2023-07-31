import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import CategoryForm from '../Form'

interface INewCategoryProps {
	category: Schema.CategoriesFormData
}

const NewCategory = ({ category }: INewCategoryProps) => {
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
