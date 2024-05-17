import React from 'react'
import {
	Form,
	TextInput,
	Textarea,
	Checkbox,
	Submit,
	FormGroup,
} from '@/Components/Form'
import { ModelsDropdown, VendorsDropdown, LocationsDropdown } from '@/Features/Dropdowns'
import { type UseFormProps } from 'use-inertia-form'
import { coerceArray } from '../../lib/collections'

interface AccessoryFormProps {
	accessory: Schema.AccessoriesFormData
}

export interface IAccessoryFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<AccessoryFormProps>) => boolean|void
	accessory: Schema.AccessoriesFormData
}

const AccessoryForm = ({ to, method = 'post', onSubmit, accessory }: IAccessoryFormProps) => {

	return (
		<Form
			model="accessory"
			data={ { accessory } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<FormGroup legend="Accessory Details">
				<ModelsDropdown modelCategory="Accessory" initialData={ coerceArray(accessory?.model) } />

				<TextInput name="serial" label="Serial" />

				<TextInput name="asset_tag" label="Asset Tag" />

				<TextInput name="qty" label="Quantity" />

				{ /* TODO: Alert options dialog */ }
				<TextInput name="min_qty" label="Minimum Quantity" />
			</FormGroup>

			<FormGroup legend="Purchase Details">
				<VendorsDropdown initialData={ coerceArray(accessory?.vendor) } />

				<TextInput name="cost" label="Cost" />
			</FormGroup>

			<FormGroup legend="Usage Details">
				<LocationsDropdown
					label="Default Location"
					name="default_location_id"
					initialData={ coerceArray(accessory?.default_location) }
				/>

				<Checkbox name="requestable" label="Requestable" />

			</FormGroup>

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ accessory.id ? 'Update' : 'Create' } Accessory
			</Submit>
		</Form>
	)
}

export default React.memo(AccessoryForm)
