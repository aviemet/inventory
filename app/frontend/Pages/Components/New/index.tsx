import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ComponentForm from '../Form'
import { Routes } from '@/lib'

interface INewComponentProps {
	component: Schema.ComponentsFormData
}

const NewComponent = ({ component }: INewComponentProps) => {
	const title = 'New Component'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Components', href: Routes.components() },
			{ title: 'New Component' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ComponentForm to={ Routes.components() } component={ component } />
			</Section>
		</Page>
	)
}

export default NewComponent
