import { Heading, Page, Section } from '@/Components'
import React from 'react'

const ShowTicket = () => {
	const title = 'Show Ticket'
	return (
		<Page title={ title }>
			<Section>
				<Heading>{ title }</Heading>
				Show Ticket
			</Section>
		</Page>
	)
}

export default ShowTicket
