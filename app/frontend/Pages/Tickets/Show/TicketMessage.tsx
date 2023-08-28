import React from 'react'
import { Box, DangerousHtml, Group, Link, Paper } from '@/Components'
import { Routes, formatter } from '@/lib'
import { Form, RichText, Submit } from '@/Components/Form'
import { EditIcon, CrossIcon } from '@/Components/Icons'
import { IconButton } from '@/Components/Button'
import { useToggle } from '@mantine/hooks'
import { usePageProps } from '@/lib/hooks'

interface ITicketMessageProps {
	message: Schema.TicketMessage
}

const TicketMessage = ({ message }: ITicketMessageProps) => {
	const { auth: { user } } = usePageProps()
	const [isEditing, toggleIsEditing] = useToggle()

	return (
		<Paper p="sm">
			<Group position="apart" align="start">
				<Box>
					{ message.created_by?.id && <Box>
						From:&nbsp;
						<Link href={ Routes.person(message.created_by.id) }>{ message.created_by.name }</Link>
					</Box> }
					<Box>Sent At: { formatter.date.long(message.created_at) }</Box>
				</Box>
				{ user.id === message.created_by_id && <Box>
					<IconButton onClick={ () => toggleIsEditing() }>
						{ isEditing ? <CrossIcon /> : <EditIcon />  }
					</IconButton>
				</Box> }
			</Group>

			<br />

			{ isEditing ?
				<Form
					method="patch"
					model="ticket_message"
					data={ { ticket_message: { body: message.body } } }
					to={ Routes.ticketMessage(message.ticket_id, message.id!) }
					remember={ false }
					onSubmit={ () => toggleIsEditing() }
				>
					<RichText name="body" />

					<Submit>Edit Message</Submit>
				</Form>
				:
				<DangerousHtml>{ message.body }</DangerousHtml>
			}

		</Paper>
	)
}

export default TicketMessage
