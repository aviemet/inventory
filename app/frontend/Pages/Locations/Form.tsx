import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { LocationsDropdown } from '@/Components/Dropdowns'
import CurrenciesDropdown from '@/Components/Dropdowns/CurrenciesDropdown'

export type TLocationFormData = {
	location: Schema.LocationsFormData
}

export interface ILocationFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TLocationFormData>) => boolean|void
	location?: Schema.LocationsFormData
}

const emptyLocation: Schema.LocationsFormData = {
	name: '',
	currency: '',
	parent_id: undefined,
}

const LocationForm = ({
	to,
	method = 'post',
	onSubmit,
	location = emptyLocation,
}: ILocationFormProps) => {
	return (
		<Form
			model="location"
			data={ { location } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Location Name" required autoFocus />

			<CurrenciesDropdown />

			<LocationsDropdown
				label="Parent Location"
				name="parent_id"
				filter={ datum => datum.id !== location?.id }
			/>

			<Submit>
				{ location.id ? 'Update' : 'Create' } Location
			</Submit>
		</Form>
	)
}

export default React.memo(LocationForm)
