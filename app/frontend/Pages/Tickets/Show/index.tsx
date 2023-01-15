import React from 'react'
import { Badge, Box, Heading, Page, Section } from '@/Components'
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
				{ ticket.assignees && ticket.assignees.map(assignee => <Box key={ assignee.id }>
					Assigned To: <Badge>{ assignee.name }</Badge>
				</Box>) }
				<DangerousHtml>{ ticket.description }</DangerousHtml>
			</Section>

			{ ticket.messages?.map(message => (
				<Section key={ message.id }>
					<DangerousHtml>{ message.body }</DangerousHtml>
				</Section>
			)) }

			<Section>
				<Form
					model="ticket_message"
					data={ { ticket_message: { body: '' } } }
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
