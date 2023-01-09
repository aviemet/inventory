import { DangerousHtml, Section } from '@/Components'
import React from 'react'

interface ITicketMessageProps {
	message: Schema.TicketMessage
}

const TicketMessage = ({ message }: ITicketMessageProps) => {
	return (
		<Section>
			<div>From: { message.created_by?.name }</div>
			<DangerousHtml>{ message.body }</DangerousHtml>
		</Section>
	)
}

export default TicketMessage
