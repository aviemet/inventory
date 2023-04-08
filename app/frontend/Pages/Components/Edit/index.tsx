import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ComponentForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateComponentProps{
	component: Schema.ComponentsEdit
	models: Schema.ModelsOptions[]
	vendors: Schema.VendorsOptions[]
	locations: Schema.LocationsOptions[]
	manufacturers: Schema.ManufacturersOptions[]
	categories: Schema.CategoriesOptions[]
}

const EditComponent = ({ component, ...models }: IUpdateComponentProps) => {
	const title = `Edit ${component.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Components', href: Routes.components() },
			{ title: component.name!, href: Routes.component(component) },
			{ title: 'Edit Component' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ComponentForm to={ Routes.component(component) } method="patch" component={ component } { ...models } />
			</Section>
		</Page>
	)
}

export default EditComponent
