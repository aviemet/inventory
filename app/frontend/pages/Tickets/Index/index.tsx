import React from "react"

import { NewIcon } from "@/components/Icons"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import TicketsTable from "../Table"

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
			pagination={ pagination }
			deleteRoute={ Routes.tickets() }
			menuOptions={ [
				{ label: "New Ticket", href: Routes.newTicket(), icon: <NewIcon /> },
			] }
		>
			<TicketsTable />
		</IndexPageTemplate>
	)
}

export default TicketsIndex
