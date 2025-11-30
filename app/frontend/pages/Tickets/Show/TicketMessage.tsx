import { useToggle } from "@mantine/hooks"

import { Box, DangerousHtml, Group, Link, Paper } from "@/components"
import { IconButton } from "@/components/Button"
import { Form, RichText, Submit } from "@/components/Form"
import { EditIcon, CrossIcon } from "@/components/Icons"
import { Routes, formatter } from "@/lib"
import { usePageProps } from "@/lib/hooks"

interface TicketMessageProps {
	message: Schema.TicketMessage
}

const TicketMessage = ({ message }: TicketMessageProps) => {
	const { auth: { user } } = usePageProps()
	const [isEditing, toggleIsEditing] = useToggle()

	return (
		<Paper p="sm">
			<Group justify="space-between" align="start">
				<Box>
					{ message.created_by?.id && <Box>
						From:&nbsp;
						<Link href={ Routes.person(message.created_by.id) }>{ message.created_by.name }</Link>
					</Box> }
					<Box>Sent At: { formatter.date.long(message.created_at) }</Box>
				</Box>
				{ user.id === message.created_by_id && <Box>
					<IconButton onClick={ () => toggleIsEditing() }>
						{ isEditing ? <CrossIcon /> : <EditIcon /> }
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
