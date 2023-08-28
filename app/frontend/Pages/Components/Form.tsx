import React from 'react'
import {
	Form,
	TextInput,
	Textarea,
	Checkbox,
	Submit,
	FormGroup,
} from '@/Components/Form'
import { ModelsDropdown, VendorsDropdown, LocationsDropdown } from '@/Components/Dropdowns'
import { type UseFormProps } from 'use-inertia-form'
import { coerceArray } from '../../lib/collections'

type TComponentFormData = {
	component: Schema.ComponentsFormData
}

export interface IComponentFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TComponentFormData>) => boolean|void
	component: Schema.ComponentsFormData
}

const ComponentForm = ({
	to,
	method = 'post',
	onSubmit,
	component,
}: IComponentFormProps) => {
	return (
		<Form
			model="component"
			data={ { component } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<FormGroup legend="Component Details">
				<ModelsDropdown initialData={ coerceArray(component?.model) } />

				<TextInput name="serial" label="Serial" />

				<TextInput name="asset_tag" label="Asset Tag" />

				<TextInput name="qty" label="Quantity" />

				<TextInput name="min_qty" label="Minimum Quantity" />
			</FormGroup>

			<FormGroup legend="Purchase Details">
				<VendorsDropdown initialData={ coerceArray(component?.vendor) } />

				<TextInput name="cost" label="Cost" />
			</FormGroup>

			<FormGroup legend="Usage Details">
				<LocationsDropdown
					label="Default Location"
					name="default_location_id"
					initialData={ coerceArray(component?.default_location) }
				/>

				<Checkbox name="requestable" label="Requestable" />

			</FormGroup>

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ component.id ? 'Update' : 'Create' } Component
			</Submit>
		</Form>
	)
}

export default React.memo(ComponentForm)
