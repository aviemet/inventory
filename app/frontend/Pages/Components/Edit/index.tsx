import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ComponentForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateComponentProps{
	component: Schema.Component
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
	manufacturers: Schema.Manufacturer[]
	categories: Schema.Category[]
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
