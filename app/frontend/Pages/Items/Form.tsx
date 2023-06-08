import React, { useState } from 'react'
import {
	Form,
	TextInput,
	CurrencyInput,
	Textarea,
	Checkbox,
	DateTime,
	Submit,
	FormGroup,
	DynamicInputs,
} from '@/Components/Form'
import { ModelsDropdown, VendorsDropdown, LocationsDropdown } from '@/Components/Form/Dropdowns'
import CheckboxComponent from '@/Components/Inputs/Checkbox'
import { Group } from '@/Components'
import { type UseFormProps } from 'use-inertia-form'

type TItemFormData = {
	item: Schema.ItemsFormData
}

export interface IItemFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TItemFormData>) => boolean|void
	item: Schema.ItemsFormData
	models: Schema.ModelsOptions[]
	vendors: Schema.VendorsOptions[]
	locations: Schema.LocationsOptions[]
	manufacturers: Schema.ManufacturersOptions[]
	categories: Schema.CategoriesOptions[]
}

const ItemForm = ({ method = 'post', item, models, vendors, locations, manufacturers, categories, ...props }: IItemFormProps) => {
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
				<ModelsDropdown
					models={ models }
					manufacturers={ manufacturers }
					categories={ categories }
					errorKey="item.model"
				/>

				<TextInput name="serial" label="Serial" />

				<TextInput name="asset_tag" label="Asset Tag" />

				<CheckboxComponent
					label="Static IP Assignment"
					checked={ staticIp }
					onChange={ e => setStaticIp(e.target.checked) }
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
				<VendorsDropdown vendors={ vendors } />

				<CurrencyInput name="cost" label="Cost" />

				<DateTime label="Purchased At" name="purchased_at" />
			</FormGroup>

			<FormGroup legend="Usage Details">
				<LocationsDropdown
					label="Default Location"
					name="default_location_id"
					locations={ locations }
					currencies={ [] }
					required
				/>

				<Checkbox name="requestable" label="Requestable" />

			</FormGroup>

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ item.id ? 'Update' : 'Create' } Item
			</Submit>

		</Form>
	)
}

export default React.memo(ItemForm)
