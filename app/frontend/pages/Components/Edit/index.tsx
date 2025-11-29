import React from 'react'
import { Title, Page, Section } from '@/components'
import ComponentForm from '../Form'
import { Routes } from '@/lib'

interface UpdateComponentProps{
	component: Schema.ComponentsEdit
}

const EditComponent = ({ component }: UpdateComponentProps) => {
	const title = `Edit ${component.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Components', href: Routes.components() },
			{ title: component.name!, href: Routes.component(component) },
			{ title: 'Edit Component', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<ComponentForm to={ Routes.component(component) } method="patch" component={ component } />
			</Section>
		</Page>
	)
}

export default EditComponent
