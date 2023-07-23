import React from 'react'
import {
	Form,
	TextInput,
	Textarea,
	Checkbox,
	Submit,
	FormGroup,
} from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { LocationsDropdown, ModelsDropdown, VendorsDropdown } from '@/Components/Dropdowns'

type TConsumableFormData = {
	consumable: Schema.ConsumablesFormData
}

export interface IConsumableFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TConsumableFormData>) => boolean|void
	consumable: Schema.ConsumablesFormData
	models: Schema.ModelsOptions[]
	vendors: Schema.VendorsOptions[]
	locations: Schema.LocationsOptions[]
	manufacturers: Schema.ManufacturersOptions[]
	categories: Schema.CategoriesOptions[]
}

const ConsumableForm = ({ to, method = 'post', onSubmit, consumable, models, vendors, locations, manufacturers, categories }: IConsumableFormProps) => {
	return (
		<Form
			model="consumable"
			data={ { consumable } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
			className="max-w-5xl"
		>
			<TextInput name="name" label="Name" required autoFocus />

			<FormGroup legend="Consumable Details">
				<ModelsDropdown
					models={ models }
					manufacturers={ manufacturers }
					categories={ categories }
					errorKey="consumable.model"
				/>

				<TextInput name="serial" label="Serial" />

				<TextInput name="asset_tag" label="Asset Tag" />

				<TextInput name="qty" label="Quantity" />

				<TextInput name="min_qty" label="Minimum Quantity" />
			</FormGroup>

			<FormGroup legend="Purchase Details">
				<VendorsDropdown vendors={ vendors } />

				<TextInput name="cost" label="Cost" />
			</FormGroup>

			<FormGroup legend="Usage Details">
				<LocationsDropdown
					label="Default Location"
					name="default_location_id"
					locations={ locations }
					currencies={ [] }
				/>

				<Checkbox name="requestable" label="Requestable" />

			</FormGroup>

			<Textarea name="notes" label="Notes" />

			<Submit className="w-full">
				{ consumable.id ? 'Update' : 'Create' } Consumable
			</Submit>
		</Form>
	)
}

export default React.memo(ConsumableForm)
