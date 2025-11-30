import React from "react"
import { type HTTPVerb, type UseFormProps } from "use-inertia-form"

import { Grid } from "@/components"
import {
	Form,
	TextInput,
	RichText,
	Submit,
	FieldsFor,
} from "@/components/Form"
import { AssetsDropdown, FormPeopleDropdown, FormPeopleMultiSelect } from "@/features/Dropdowns"
import { coerceArray } from "@/lib"

type TicketFormData = {
	ticket: Schema.TicketsFormData
}

export interface TicketFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TicketFormData>) => boolean | void
	ticket: Schema.TicketsFormData
}

const TicketForm = ({ to, method = "post", onSubmit, ticket }: TicketFormProps) => {
	return (
		<Form
			model="ticket"
			data={ { ticket } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="subject" label="Subject" required />
				</Grid.Col>

				<Grid.Col>
					<FieldsFor model="assignments" >
						<FormPeopleMultiSelect
							label="Assign To"
							name="person_id"
						/>
					</FieldsFor>
				</Grid.Col>

				<Grid.Col>
					<FormPeopleDropdown
						label="Primary Contact"
						name="primary_contact_id"
					/>
				</Grid.Col>

				<Grid.Col>
					<AssetsDropdown initialData={ coerceArray(ticket?.asset) } />
				</Grid.Col>

				<Grid.Col>
					<RichText name="description" label="Description" />
				</Grid.Col>

				<Grid.Col>
					<Submit>
						{ ticket.id ? "Update" : "Create" } Ticket
					</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default TicketForm
