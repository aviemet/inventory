import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ModelForm from '../Form'
import { Routes } from '@/lib'

interface INewModelProps {
	model: Schema.ModelsFormData
	categories: Schema.CategoriesOptions[]
	manufacturers: Schema.ManufacturersOptions[]
}

const New = ({ ...data }: INewModelProps) => {
	const title = 'New Model'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Models', href: Routes.models() },
			{ title: 'New Model' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ModelForm to={ Routes.models() } { ...data } />
			</Section>
		</Page>
	)
}

export default New
