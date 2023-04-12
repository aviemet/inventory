import React from 'react'
import { Heading, Page, Section } from '@/Components'

interface IShowStatusLabelProps {
	status_label: Schema.StatusLabelsShow
}

const ShowStatusLabel = ({ status_label }: IShowStatusLabelProps) => {
	const title = status_label.name || 'Show Status Label'

	return (
		<Page title={ title }>
			<Section>
				<Heading>{ title }</Heading>
			</Section>
		</Page>
	)
}

export default ShowStatusLabel
