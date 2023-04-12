import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import StatusLabelForm from '../Form'

interface IUpdateStatusLabelProps{
	status_label: Schema.StatusLabelsEdit
}

const EditStatusLabel = ({ status_label }: IUpdateStatusLabelProps) => {
	const title = 'Edit StatusLabel'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Status Labels', href: Routes.statusLabels() },
			{ title: status_label.name!, href: Routes.statusLabel(status_label.slug) },
			{ title: 'Edit Status Label' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<StatusLabelForm to={ Routes.statusLabel(status_label) } method="patch" status_label={ status_label } />
			</Section>
		</Page>
	)
}

export default EditStatusLabel
