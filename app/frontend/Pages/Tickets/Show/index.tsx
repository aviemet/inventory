import React from 'react'
import { Heading, Page, Section } from '@/Components'
import DangerousHtml from '@/Components/DangerousHtml'
import { Form, RichText, Submit } from '@/Components/Form'

interface IShowTicketProps {
	ticket: Schema.Ticket
}

const ShowTicket = ({ ticket }: IShowTicketProps) => {
	const title = ticket.subject || 'Show Ticket'

	return (
		<Page title={ title }>
			<Section>
				<Heading>{ title }</Heading>
				<DangerousHtml>{ ticket.description }</DangerousHtml>
			</Section>
			<Section>
				<Heading order={ 3 }>Add Message</Heading>
				<Form
					data={ { message: { body: '' } } }
				>
					<RichText name="body" label="Note" />

					<Submit>Add Message</Submit>
				</Form>
			</Section>
		</Page>
	)
}

export default ShowTicket
