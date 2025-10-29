import React from 'react'
import { Title, Page, Section } from '@/components'
import StatusLabelForm from '../Form'
import { Routes } from '@/lib'

interface NewStatusLabelProps {
	status_label: Schema.StatusLabelsFormData
}

const NewStatusLabel = ({ ...data }: NewStatusLabelProps) => {
	const title = 'New Status Label'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Status Labels', href: Routes.statusLabels() },
			{ title: 'New Status Label', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<StatusLabelForm to={ Routes.statusLabels() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewStatusLabel
