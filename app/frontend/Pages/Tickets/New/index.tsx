import React from 'react'
import { Heading, Page, Section } from '@/Components'
import TicketForm from '../Form'
import { Routes } from '@/lib'

interface NewTicketProps {
	ticket: Schema.TicketsFormData
	people: Schema.PeopleOptions[]
	assets: Schema.AssetsOptions[]
}

const NewTicket = ({ ...data }: NewTicketProps) => {
	const title = 'New Support Ticket'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Tickets', href: Routes.tickets() },
			{ title: 'New Ticket' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<TicketForm to={ Routes.tickets() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewTicket
