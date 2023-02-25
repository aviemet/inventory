import React from 'react'
import {
	Form,
	TextInput,
	RichText,
	Submit,
	SearchableDropdown,
	DynamicInputs,
	FieldsFor,
} from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

export interface ITicketFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps) => boolean|void
	ticket: Schema.Ticket
	people: Schema.Person[]
	assets: Schema.Asset[]
}

const TicketForm = ({ to, method = 'post', onSubmit, ticket, people, assets }: ITicketFormProps) => {
	const assigneeIds = ticket.assignees?.map(assignee => assignee.id) || []

	return (
		<Form
			model="ticket"
			data={ { ticket } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="subject" label="Subject" required autoFocus />

			<FieldsFor model="assignments" >
				<DynamicInputs label="Assignees" emptyData={ { id: '' } }>
					<SearchableDropdown
						options={ people }
						label="Assign To"
						name="person_id"
						disabledOptions={ (label, value) => assigneeIds.includes(Number(value)) }
					/>
				</DynamicInputs>
			</FieldsFor>

			<SearchableDropdown
				options={ people }
				label="Primary Contact"
				name="primary_contact_id"
			/>

			<SearchableDropdown
				options={ assets }
				label="Asset"
				name="asset_id"
			/>

			<RichText name="description" label="Description" />

			<Submit>
				{ ticket.id ? 'Update' : 'Create' } Ticket
			</Submit>

		</Form>
	)
}

export default React.memo(TicketForm)
