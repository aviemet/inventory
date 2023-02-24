import React from 'react'
import {
	Form,
	TextInput,
	Submit,
} from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

export interface IManufacturerFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps) => boolean|void
	manufacturer?: Partial<Schema.Manufacturer>
}

const emptyManufacturer: Partial<Schema.Manufacturer> = {
	name: '',
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
			<TextInput name="name" label="Name" required autoFocus />

			<Submit>
				{ manufacturer.id ? 'Update' : 'Create' } Manufacturer
			</Submit>
		</Form>
	)
}

export default React.memo(ManufacturerForm)
