import React from 'react'
import { Grid } from '@/Components'
import {
	Form,
	TextInput,
	Textarea,
	Submit,
} from '@/Components/Form'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type StatusLabelFormData = {
	status_label: Schema.StatusLabelsFormData
}

const emptyStatusLabel: Schema.StatusLabelsFormData = {
	name: '',
	description: '',
	status_type: 1,
}

export interface StatusLabelFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<StatusLabelFormData>) => boolean|void
	status_label?: Schema.StatusLabelsFormData
}

const StatusLabelForm = ({ to, method = 'post', onSubmit, status_label = emptyStatusLabel }: StatusLabelFormProps) => {
	return (
		<Form
			model="status_label"
			data={ { status_label } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="name" label="Status Name" required autoFocus />
				</Grid.Col>

				<Grid.Col>
					<Textarea name="description" label="Description" />
				</Grid.Col>
				<Grid.Col>
					<Submit>
						{ status_label.id ? 'Update' : 'Create' } StatusLabel
					</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default StatusLabelForm
