import React from 'react'
import {
	Form,
	TextInput,
	Textarea,
	Submit,
} from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TStatusLabelFormData = {
	status_label: Schema.StatusLabelsFormData
}

const emptyStatusLabel: Schema.StatusLabelsFormData = {
	name: '',
	description: '',
	status_type: 1,
}

export interface IStatusLabelFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TStatusLabelFormData>) => boolean|void
	status_label?: Schema.StatusLabelsFormData
}

const StatusLabelForm = ({ to, method = 'post', onSubmit, status_label = emptyStatusLabel }: IStatusLabelFormProps) => {
	return (
		<Form
			model="status_label"
			data={ { status_label } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>

			<TextInput name="name" label="Status Name" required autoFocus />

			<Textarea name="description" label="Description" />

			<Submit>
				{ status_label.id ? 'Update' : 'Create' } StatusLabel
			</Submit>

		</Form>
	)
}

export default React.memo(StatusLabelForm)
