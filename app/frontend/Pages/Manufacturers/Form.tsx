import React from 'react'
import { Grid } from '@/Components'
import {
	Form,
	TextInput,
	Submit,
} from '@/Components/Form'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type ManufacturerFormData = {
	manufacturer: Schema.ManufacturersFormData
}

export interface ManufacturerFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<ManufacturerFormData>) => boolean | void
	manufacturer?: Schema.ManufacturersFormData
}

const emptyManufacturer: Schema.ManufacturersFormData = {
	name: '',
}

const ManufacturerForm = ({ to, method = 'post', onSubmit, manufacturer = emptyManufacturer }: ManufacturerFormProps) => {
	return (
		<Form
			model="manufacturer"
			data={ { manufacturer } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="name" label="Name" required />
				</Grid.Col>

				<Grid.Col>
					<Submit>
						{ manufacturer.id ? 'Update' : 'Create' } Manufacturer
					</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default ManufacturerForm
