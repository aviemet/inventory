import React from 'react'
import { Title, Page, Section } from '@/Components'
import ModelForm from '../Form'
import { Routes } from '@/lib'

interface NewModelProps {
	model: Schema.ModelsFormData
	categories: Schema.CategoriesOptions[]
	manufacturers: Schema.ManufacturersOptions[]
}

const New = ({ ...data }: NewModelProps) => {
	const title = 'New Model'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Models', href: Routes.models() },
			{ title: 'New Model', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<ModelForm to={ Routes.models() } { ...data } />
			</Section>
		</Page>
	)
}

export default New
