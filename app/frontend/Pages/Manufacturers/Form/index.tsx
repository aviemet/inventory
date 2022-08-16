import React from 'react'
import {
	Form,
	Input,
	Submit,
} from '@/Components/Form'

export interface IManufacturerFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	manufacturer?: Partial<Schema.Manufacturer>
}

const emptyManufacturer: Partial<Schema.Manufacturer> = {
	name: ''
}

const ManufacturerForm = ({ to, method = 'post', onSubmit, manufacturer = emptyManufacturer }: IManufacturerFormProps) => {
	return (
		<Form
			model="manufacturer"
			data={ { manufacturer } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Input name="name" label="Name" required />

			<Submit>
				{ manufacturer.id ? 'Update' : 'Create' } Manufacturer
			</Submit>
		</Form>
	)
}

export default React.memo(ManufacturerForm)
