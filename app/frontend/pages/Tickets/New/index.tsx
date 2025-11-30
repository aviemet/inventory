import React from "react"

import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import TicketForm from "../Form"

interface NewTicketProps {
	ticket: Schema.TicketsFormData
	people: Schema.PeopleOptions[]
	assets: Schema.AssetsOptions[]
}

const NewTicket = ({ ...data }: NewTicketProps) => {
	const title = "New Support Ticket"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Tickets", href: Routes.tickets() },
			{ title: "New Ticket", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<TicketForm to={ Routes.tickets() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewTicket
