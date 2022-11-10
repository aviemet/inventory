import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Components/Layout'
import { NewIcon } from '@/Components/Icons'
import TicketsTable from '../Table'

interface ITicketsIndexProps {
	tickets: Schema.Ticket[]
	pagination: Schema.Pagination
}

const TicketsIndex = ({ tickets, pagination }: ITicketsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Support Tickets"
			model="tickets"
			rows={ tickets }
			pagination={ pagination }
			menuOptions={ [
				{ label: 'New Ticket', href: Routes.newTicket(), icon: NewIcon },
			] }
		>
			<TicketsTable />
		</IndexPageTemplate>
	)
}

export default TicketsIndex
