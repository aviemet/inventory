import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Features'
import { NewIcon } from '@/Components/Icons'
import TicketsTable from '../Table'

interface TicketsIndexProps {
	tickets: Schema.TicketsIndex[]
	pagination: Schema.Pagination
}

const TicketsIndex = ({ tickets, pagination }: TicketsIndexProps) => {
	const title = 'Support Tickets'
	return (
		<IndexPageTemplate
			title={ title }
			model="tickets"
			rows={ tickets }
			pagination={ pagination }
			deleteRoute={ Routes.tickets() }
			menuOptions={ [
				{ label: 'New Ticket', href: Routes.newTicket(), icon: <NewIcon /> },
			] }
		>
			<TicketsTable />
		</IndexPageTemplate>
	)
}

export default TicketsIndex
