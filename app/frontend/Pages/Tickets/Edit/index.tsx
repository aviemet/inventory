import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import TicketForm from '../Form'

interface IUpdateTicketProps{
	ticket: Schema.Ticket
	people: Schema.Person[]
}

const EditTicket = ({ ticket, people }: IUpdateTicketProps) => {
	const title = 'Edit Ticket'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Tickets', href: Routes.tickets() },
			{ title: ticket.subject!, href: Routes.ticket(ticket) },
			{ title: 'Edit Ticket' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<TicketForm
					to={ Routes.ticket(ticket) }
					method="patch"
					ticket={ ticket }
					people={ people }
				/>
			</Section>
		</Page>
	)
}

export default EditTicket
