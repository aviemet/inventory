import { NewIcon } from "@/components/Icons"
import TicketsTable, { ticketsColumns } from "@/domains/Tickets/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface TicketsIndexProps {
	tickets: Schema.TicketsIndex[]
	pagination: Schema.Pagination
}

const TicketsIndex = ({ tickets, pagination }: TicketsIndexProps) => {
	const title = "Support Tickets"
	return (
		<IndexPageTemplate
			title={ title }
			model="tickets"
			rows={ tickets }
			columns={ ticketsColumns }
			pagination={ pagination }
			deleteRoute={ Routes.tickets() }
			menuOptions={ [
				{ label: "New Ticket", href: Routes.newTicket(), icon: <NewIcon /> },
			] }
		>
			<TicketsTable records={ tickets } pagination={ pagination } model="tickets" />
		</IndexPageTemplate>
	)
}

export default TicketsIndex
