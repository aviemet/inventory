import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import TicketForm from '../Form'

interface UpdateTicketProps{
	ticket: Schema.TicketsEdit
	people: Schema.PeopleOptions[]
	assets: Schema.AssetsOptions[]
}

const EditTicket = ({ ticket, ...data }: UpdateTicketProps) => {
	const title = 'Edit Ticket'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Tickets', href: Routes.tickets() },
			{ title: ticket.subject!, href: Routes.ticket(ticket) },
			{ title: 'Edit Ticket', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<TicketForm
					to={ Routes.ticket(ticket) }
					method="patch"
					ticket={ ticket }
					{ ...data }
				/>
			</Section>
		</Page>
	)
}

export default EditTicket
