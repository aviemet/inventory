import React from 'react'
import {
	Form,
	Input,
	Textarea,
	Submit,
} from '@/Components/Form'

export interface IStatusLabelFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	status_label: Schema.StatusLabel
}

const StatusLabelForm = ({ to, method = 'post', onSubmit, status_label }: IStatusLabelFormProps) => {
	return (
		<Form
			model="status_label"
			data={ { status_label } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>

			<Input name="name" label="Status Name" required autoFocus />

			<Textarea name="description" label="Description" />

			<Submit>
				{ status_label.id ? 'Update' : 'Create' } StatusLabel
			</Submit>

		</Form>
	)
}

export default React.memo(StatusLabelForm)
