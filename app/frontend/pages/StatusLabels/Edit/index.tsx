import React from 'react'
import { Title, Page, Section } from '@/components'
import { Routes } from '@/lib'
import StatusLabelForm from '../Form'

interface UpdateStatusLabelProps{
	status_label: Schema.StatusLabelsEdit
}

const EditStatusLabel = ({ status_label }: UpdateStatusLabelProps) => {
	const title = 'Edit StatusLabel'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Status Labels', href: Routes.statusLabels() },
			{ title: status_label.name!, href: Routes.statusLabel(status_label.slug) },
			{ title: 'Edit Status Label', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<StatusLabelForm to={ Routes.statusLabel(status_label) } method="patch" status_label={ status_label } />
			</Section>
		</Page>
	)
}

export default EditStatusLabel
