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
import { coerceArray } from '@/lib'

type TConsumableFormData = {
	consumable: Schema.ConsumablesFormData
}

export interface IConsumableFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TConsumableFormData>) => boolean|void
	consumable: Schema.ConsumablesFormData
}

const ConsumableForm = ({ to, method = 'post', onSubmit, consumable }: IConsumableFormProps) => {
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
					initialData={ coerceArray(consumable?.model) }
					errorKey="consumable.model"
				/>

				<TextInput name="serial" label="Serial" />

				<TextInput name="asset_tag" label="Asset Tag" />

				<TextInput name="qty" label="Quantity" />

				<TextInput name="min_qty" label="Minimum Quantity" />
			</FormGroup>

			<FormGroup legend="Purchase Details">
				<VendorsDropdown initialData={ coerceArray(consumable?.vendor) } />

				<TextInput name="cost" label="Cost" />
			</FormGroup>

			<FormGroup legend="Usage Details">
				<LocationsDropdown
					label="Default Location"
					name="default_location_id"
					initialData={ coerceArray(consumable?.default_location) }
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
