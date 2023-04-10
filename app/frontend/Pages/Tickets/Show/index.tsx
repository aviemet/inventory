import React from 'react'
import { Badge, Box, Heading, Link, Page, Section } from '@/Components'
import TicketMessage from './TicketMessage'
import DangerousHtml from '@/Components/DangerousHtml'
import { Form, RichText, Submit } from '@/Components/Form'
import { Routes } from '@/lib'

interface IShowTicketProps {
	ticket: Schema.TicketsShow
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
				<Box>
					Primary Contact:&nbsp;
					{ ticket.primary_contact?.id && <Link href={ Routes.person(ticket.primary_contact.id ) }>{ ticket.primary_contact.name }</Link> }
				</Box>
				<Box>
					Assigned To:&nbsp;
					{ ticket.assignees && ticket.assignees.map(assignee => <Badge key={ assignee.id }>{ assignee.name }</Badge>) }
				</Box>

				{ ticket.asset && <Box>
					Asset:&nbsp;
					<Link href={ Routes.asset(ticket.asset.id) }>{ ticket.asset.name }</Link>
				</Box> }
			</Section>

			<Section>
				<DangerousHtml>{ ticket.description }</DangerousHtml>
			</Section>

			{ ticket.messages?.map(message => (
				<TicketMessage key={ message.id } message={ message } />
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
