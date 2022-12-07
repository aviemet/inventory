import React from 'react'
import { Heading, Page, Section } from '@/Components'
import DangerousHtml from '@/Components/DangerousHtml'
import { Form, RichText, Submit } from '@/Components/Form'
import { Routes } from '@/lib'

interface IShowTicketProps {
	ticket: Schema.Ticket
}

const ShowTicket = ({ ticket }: IShowTicketProps) => {
	const title = ticket.subject || 'Show Ticket'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Support Tickets', href: Routes.tickets() },
			{ title },
		] }>
			<Section>
				<Heading>{ title }</Heading>
				<DangerousHtml>{ ticket.description }</DangerousHtml>
			</Section>

			{ ticket.messages?.map(message => (
				<Section key={ message.id }>
					<DangerousHtml>{ message.body }</DangerousHtml>
				</Section>
			)) }

			<Section>
				<Form
					data={ { message: { body: '' } } }
					to={ Routes.ticketMessages(ticket.id) }
					remember={ false }
				>
					<RichText name="body" label="Add Message" />

					<Submit>Add Message</Submit>
				</Form>
			</Section>
		</Page>
	)
}

export default ShowTicket
