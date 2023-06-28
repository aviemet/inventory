import React from 'react'
import {
	Form,
	TextInput,
	SearchableDropdown,
	Submit,
} from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { LocationsDropdown } from '@/Components/Form/Dropdowns'
import CurrenciesDropdown from '@/Components/Form/Dropdowns/CurrenciesDropdown'

export type TLocationFormData = {
	location: Schema.LocationsFormData
}

export interface ILocationFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TLocationFormData>) => boolean|void
	location?: Schema.LocationsFormData
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

			<CurrenciesDropdown />

			{ /* <SearchableDropdown
				label="Currency"
				name="currency"
				getLabel={ value => `${value.code} (${value.symbol})` }
				getValue={ value => value.code }
				options={ currencies }
			/> */ }

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
