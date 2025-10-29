import React from 'react'
import { Badge, Box, Title, Link, Page, Paper, Section, Text } from '@/components'
import TicketMessage from './TicketMessage'
import DangerousHtml from '@/components/DangerousHtml'
import { Form, RichText, Submit } from '@/components/Form'
import { Routes } from '@/lib'

interface ShowTicketProps {
	ticket: Schema.TicketsShow
}

const ShowTicket = ({ ticket }: ShowTicketProps) => {
	const title = ticket.subject || 'Show Ticket'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Support Tickets', href: Routes.tickets() },
			{ title, href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>
				<Box>
					<Text size="sm">
						Primary Contact:&nbsp;
						{ ticket.primary_contact?.id && <Link href={ Routes.person(ticket.primary_contact.id ) }>{ ticket.primary_contact.name }</Link> }
					</Text>
					<Text size="sm">
						Assigned To:&nbsp;
						{ ticket.assignees && ticket.assignees.map(assignee => <Badge key={ assignee.id }>{ assignee.name }</Badge>) }
					</Text>

					{ ticket.asset && <Text size="sm">
						Asset:&nbsp;
						<Link href={ Routes.asset(ticket.asset.id) }>{ ticket.asset.name }</Link>
					</Text> }
				</Box>

				<Paper p="sm" my="sm">
					<Title order={ 4 } mb="xs">Original Message:</Title>
					<DangerousHtml>{ ticket.description }</DangerousHtml>
				</Paper>

				{ ticket.messages?.map(message => (
					<TicketMessage key={ message.id } message={ message } />
				)) }

				<Box mt="md">
					<Form
						model="ticket_message"
						data={ { ticket_message: { body: '' } } }
						to={ Routes.ticketMessages(ticket.id) }
						remember={ false }
					>
						<RichText name="body" label="Add Message" />

						<Submit>Add Message</Submit>
					</Form>
				</Box>
			</Section>
		</Page>
	)
}

export default ShowTicket
