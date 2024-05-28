import React, { useState } from 'react'
import {
	Form,
	TextInput,
	CurrencyInput,
	Textarea,
	Checkbox,
	DateTimeInput,
	Submit,
	FormGroup,
	DynamicInputs,
} from '@/Components/Form'
import {
	FormModelsDropdown,
	FormVendorsDropdown,
	FormLocationsDropdown,
	FormDepartmentsDropdown,
} from '@/Features/Dropdowns'
import { Checkbox as CheckboxInput } from '@/Components/Inputs'
import { Group } from '@/Components'
import { coerceArray } from '@/lib'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type ItemFormData = {
	item: Schema.ItemsFormData
}

export interface ItemFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<ItemFormData>) => boolean|void
	item: Schema.ItemsFormData
}

const ItemForm = ({ method = 'post', item, ...props }: ItemFormProps) => {
	const [staticIp, setStaticIp] = useState(false)

	return (
		<Form
			model="item"
			data={ { item } }
			method={ method }
			{ ...props }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<FormGroup legend="Item Details">
				<FormModelsDropdown
					modelCategory='Item'
					errorKey="item.model"
					initialData={ coerceArray(item?.model) }
				/>

				<TextInput name="serial" label="Serial" />

				<TextInput name="asset_tag" label="Asset Tag" />

				<CheckboxInput
					label="Static IP Assignment"
					checked={ staticIp }
					onChange={ e => setStaticIp(e.target.checked) }
					mt="md"
				/>

				{ staticIp && <DynamicInputs model="nics" emptyData={ {
					mac: '',
					nic_type: '',
				} }>
					<Group grow>
						<TextInput name="ip" label="IP Address" />

						<TextInput name="mac" label="Mac Address" />
					</Group>
				</DynamicInputs> }
			</FormGroup>

			<FormGroup legend="Purchase Details">
				<FormVendorsDropdown initialData={ coerceArray(item?.vendor) } />

				<CurrencyInput name="cost" label="Cost" />

				<DateTimeInput label="Purchased At" name="purchased_at" />
			</FormGroup>

			<FormGroup legend="Usage Details">
				<FormLocationsDropdown
					label="Default Location"
					name="default_location_id"
					initialData={ coerceArray(item?.default_location) }
					required
				/>

				<FormDepartmentsDropdown initialData={ coerceArray(item?.department) } />

				<Checkbox name="requestable" label="Requestable" />

			</FormGroup>

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ item.id ? 'Update' : 'Create' } Item
			</Submit>

		</Form>
	)
}

export default ItemForm
