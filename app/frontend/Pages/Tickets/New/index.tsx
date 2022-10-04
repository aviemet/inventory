import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import TicketForm from '../Form'
import { Routes } from '@/lib'

interface INewTicketProps {
	ticket: Schema.Ticket
}

const NewTicket = ({ ...data }: INewTicketProps) => {
	const title = 'New Support Ticket'

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title }</h1>

				<TicketForm to={ Routes.tickets() } { ...data } />
			</Section>
		</>
	)
}

export default NewTicket
