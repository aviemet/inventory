import React from 'react'
import { Box, DangerousHtml, Flex, Link, Section } from '@/Components'
import { Routes, formatter } from '@/lib'
import { Form, RichText, Submit } from '@/Components/Form'
import { EditIcon, CrossIcon } from '@/Components/Icons'
import { IconButton } from '@/Components/Button'
import { useToggle } from '@mantine/hooks'
import { usePage } from '@inertiajs/react'

interface ITicketMessageProps {
	message: Schema.TicketMessage
}

const TicketMessage = ({ message }: ITicketMessageProps) => {
	const { props: { auth: { user } } } = usePage<SharedInertiaProps>()
	const [isEditing, toggleIsEditing] = useToggle()

	return (
		<Section>
			<Flex position="apart">
				<Box>
					{ message.created_by && <Box>
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
			</Flex>

			<br />

			{ isEditing ?
				<Form
					model="ticket_message"
					data={ { ticket_message: message } }
					to={ Routes.ticketMessages(message.ticket_id) }
					async
					remember={ false }
				>
					<RichText name="body" />

					<Submit>Edit Message</Submit>
				</Form>
				:
				<DangerousHtml>{ message.body }</DangerousHtml>
			}

		</Section>
	)
}

export default TicketMessage
