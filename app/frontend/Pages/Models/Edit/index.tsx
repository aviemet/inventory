import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ModelForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateModelProps{
	model: Schema.Model
	categories: Schema.Category[]
	manufacturers: Schema.Manufacturer[]
}

const New = ({ model, ...models }: IUpdateModelProps) => {
	const title = `Edit ${model.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Models', href: Routes.models() },
			{ title: model.name!, href: Routes.model(model) },
			{ title: 'Edit Model' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ModelForm to={ Routes.model(model) } method="patch" model={ model } { ...models } />
			</Section>
		</Page>
	)
}

export default New
