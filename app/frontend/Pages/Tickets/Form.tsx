import React from 'react'
import {
	Form,
	Input,
	RichText,
	Submit,
	SearchableDropdown,
	DynamicInputs,
	FieldsFor,
} from '@/Components/Form'

export interface ITicketFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	ticket: Schema.Ticket
	people: Schema.Person[]
}

const TicketForm = ({ to, method = 'post', onSubmit, ticket, people }: ITicketFormProps) => {
	const assigneeIds = ticket.assignees?.map(assignee => assignee.id) || []

	return (
		<Form
			model="ticket"
			data={ { ticket } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Input name="subject" label="Subject" required autoFocus />

			<FieldsFor model="assignments" >
				<DynamicInputs label="Assignees" emptyData={ { id: '' } }>{ i => (
					<SearchableDropdown
						options={ people }
						label="Assign To"
						name={ `[${i}]person_id` }
						disabledOptions={ (label, value) => assigneeIds.includes(Number(value)) }
					/>
				) }</DynamicInputs>
			</FieldsFor>

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
