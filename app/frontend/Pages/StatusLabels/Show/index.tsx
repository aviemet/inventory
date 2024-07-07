import React from 'react'
import { Heading, Page, Section } from '@/Components'

interface ShowStatusLabelProps {
	status_label: Schema.StatusLabelsShow
}

const ShowStatusLabel = ({ status_label }: ShowStatusLabelProps) => {
	const title = status_label.name || 'Show Status Label'

	return (
		<Page title={ title }>
			<Section>
				<Title>{ title }</Title>
			</Section>
		</Page>
	)
}

export default ShowStatusLabel
