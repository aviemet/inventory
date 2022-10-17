import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ComponentForm from '../Form'
import { Routes } from '@/lib'

interface INewComponentProps {
	component: Schema.Component
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
	manufacturers: Schema.Manufacturer[]
	categories: Schema.Category[]
}

const NewComponent = ({ ...data }: INewComponentProps) => {
	const title = 'New Component'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Components', href: Routes.components() },
			{ title: 'New Component' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ComponentForm to={ Routes.components() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewComponent
