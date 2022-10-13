import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ModelForm from '../Form'
import { Routes } from '@/lib'

interface INewModelProps {
	model: Schema.Model
	categories: Schema.Category[]
	manufacturers: Schema.Manufacturer[]
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
