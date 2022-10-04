import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import TicketForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateTicketProps{
	ticket: Schema.Ticket
}

const EditTicket = ({ ticket }: IUpdateTicketProps) => {
	const title = 'Edit Ticket'

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title }</h1>

				<TicketForm to={ Routes.ticket(ticket) } method="patch" ticket={ ticket } />
			</Section>
		</>
	)
}

export default EditTicket
