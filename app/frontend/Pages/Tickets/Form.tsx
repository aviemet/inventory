import React from 'react'
import {
	Form,
	TextInput,
	RichText,
	Submit,
	FieldsFor,
} from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { AssetsDropdown, PeopleDropdown, PeopleMultiSelect } from '@/Features/Dropdowns'
import { coerceArray } from '@/lib'

type TTicketFormData = {
	ticket: Schema.TicketsFormData
}

export interface ITicketFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TTicketFormData>) => boolean|void
	ticket: Schema.TicketsFormData
}

const TicketForm = ({ to, method = 'post', onSubmit, ticket }: ITicketFormProps) => {
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
				<PeopleMultiSelect
					label="Assign To"
					name="person_id"
				/>
			</FieldsFor>

			<PeopleDropdown
				label="Primary Contact"
				name="primary_contact_id"
			/>

			<AssetsDropdown initialData={ coerceArray(ticket?.asset) } />

			<RichText name="description" label="Description" />

			<Submit>
				{ ticket.id ? 'Update' : 'Create' } Ticket
			</Submit>

		</Form>
	)
}

export default React.memo(TicketForm)
