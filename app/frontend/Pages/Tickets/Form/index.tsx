import React from 'react'
import {
	Form,
	Input,
	RichText,
	Submit,
	SearchableDropdown,
	NestedInputs,
} from '@/Components/Form'
import { set } from 'lodash'

export interface ITicketFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	ticket: Schema.Ticket
	people: Schema.Person[]
}

const TicketForm = ({ to, method = 'post', onSubmit, ticket, people }: ITicketFormProps) => {
	const testData = { ticket }
	set(testData, 'ticket.assignees[0].id', 2)
	console.log({ testData })

	return (
		<Form
			model="ticket"
			data={ testData }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Input name="subject" label="Subject" required autoFocus />

			<NestedInputs model="assignees" label="Assignees" emptyData={ { id: '' } }>
				{ /* <SearchableDropdown
					options={ people }
					label="Assign To"
					name="id"
				/> */ }

				<Input name="id" label="Id" />
			</NestedInputs>

			<SearchableDropdown
				options={ people }
				label="Primary Contact"
				name="primary_contact_id"
			/>

			<RichText name="description" label="Description" />

			<Submit>
				{ ticket.id ? 'Update' : 'Create' } Ticket
			</Submit>

		</Form>
	)
}

export default React.memo(TicketForm)
