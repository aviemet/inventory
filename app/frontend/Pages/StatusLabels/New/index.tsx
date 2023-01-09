import React from 'react'
import { Heading, Page, Section } from '@/Components'
import StatusLabelForm from '../Form'
import { Routes } from '@/lib'

interface INewStatusLabelProps {
	status_label: Schema.StatusLabel
}

const NewStatusLabel = ({ ...data }: INewStatusLabelProps) => {
	const title = 'New Status Label'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Status Labels', href: Routes.statusLabels() },
			{ title: 'New Status Label' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<StatusLabelForm to={ Routes.statusLabels() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewStatusLabel
