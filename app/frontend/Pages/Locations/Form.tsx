import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { LocationsDropdown } from '@/Features/Dropdowns'
import CurrenciesDropdown from '@/Features/Dropdowns/CurrenciesDropdown'
import { coerceArray } from '@/lib'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'
import { ComboboxItem } from '@mantine/core'

export type LocationFormData = {
	location: Schema.LocationsFormData
}

export interface LocationFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<LocationFormData>) => boolean|void
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
}: LocationFormProps) => {
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
				filter={ location?.id === undefined ? undefined : ({ options }) => (options as ComboboxItem[]).filter((option) => {
					return option.value !== String(location.id)
				}) }
				initialData={ coerceArray(location?.parent) }
			/>

			<Submit>
				{ location.id ? 'Update' : 'Create' } Location
			</Submit>
		</Form>
	)
}

export default React.memo(LocationForm)
