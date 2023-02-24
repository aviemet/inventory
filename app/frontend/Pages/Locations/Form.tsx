import React from 'react'
import {
	Form,
	TextInput,
	SearchableDropdown,
	Submit,
} from '@/Components/Form'
import { router } from '@inertiajs/react'
import { omit } from 'lodash'
import { type UseFormProps } from 'use-inertia-form'

export interface ILocationFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps) => boolean|void
	location?: Partial<Schema.Location>
	locations: Schema.Location[]
	currencies: any
}

const emptyLocation: Partial<Schema.Location> = {
	name: '',
	currency: '',
	// @ts-ignore
	parent_id: '',
}

const LocationForm = ({ to, method = 'post', onSubmit, location = emptyLocation, locations, currencies }: ILocationFormProps) => {
	return (
		<Form
			model="location"
			data={ { location: omit(location, ['id', 'created_at', 'updated_at', 'slug']) } }
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
