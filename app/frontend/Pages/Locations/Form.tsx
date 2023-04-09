import React from 'react'
import {
	Form,
	TextInput,
	SearchableDropdown,
	Submit,
} from '@/Components/Form'
import { router } from '@inertiajs/react'
import { type UseFormProps } from 'use-inertia-form'

export type TLocationFormData = {
	location: Schema.LocationsFormData
}

export interface ILocationFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TLocationFormData>) => boolean|void
	location?: Schema.LocationsFormData
	locations: Schema.LocationsOptions[]
	currencies: any
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
	locations,
	currencies,
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

			<SearchableDropdown
				label="Currency"
				name="currency"
				getLabel={ value => `${value.code} (${value.symbol})` }
				getValue={ value => value.code }
				options={ currencies }
			/>

			<SearchableDropdown
				label="Parent Location"
				name="parent_id"
				options={ locations }
				onOpen={ () => router.reload({ only: ['locations'] }) }
			/>

			<Submit>
				{ location.id ? 'Update' : 'Create' } Location
			</Submit>
		</Form>
	)
}

export default React.memo(LocationForm)
