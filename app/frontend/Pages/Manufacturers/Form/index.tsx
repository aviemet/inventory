import React from 'react'
import {
	Form,
	Input,
	Submit,
} from '@/Components/Form'
import { Inertia } from '@inertiajs/inertia'

export interface IManufacturerFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	manufacturer: Schema.Manufacturer
}

const ManufacturerForm = ({ to, method = 'post', onSubmit, manufacturer }: IManufacturerFormProps) => {
	return (
		<Form
			model="manufacturer"
			data={ { manufacturer } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Input name="name" label="Name" required autoFocus />

			<Submit>
				{ manufacturer.id ? 'Update' : 'Create' } Manufacturer
			</Submit>
		</Form>
	)
}

export default React.memo(ManufacturerForm)
