import React from 'react'
import { Grid } from '@/Components'
import { Form, TextInput, Submit } from '@/Components/Form'
import { FormLocationsDropdown, FormCurrenciesDropdown } from '@/Features/Dropdowns'
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
	parent_id: NaN,
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
			<Grid>
				<Grid.Col>
					<TextInput name="name" label="Location Name" required />
				</Grid.Col>

				<Grid.Col>
					<FormCurrenciesDropdown />
				</Grid.Col>

				<Grid.Col>
					<FormLocationsDropdown
						label="Parent Location"
						name="parent_id"
						filter={ location?.id === undefined ? undefined : ({ options }) => (options as ComboboxItem[]).filter((option) => {
							return option.value !== String(location.id)
						}) }
						initialData={ coerceArray(location?.parent) }
					/>
				</Grid.Col>

				<Grid.Col>
					<Submit>
						{ location.id ? 'Update' : 'Create' } Location
					</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default LocationForm
