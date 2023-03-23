import React from 'react'
import {
	Form,
	TextInput,
	CurrencyInput,
	Textarea,
	Checkbox,
	DateTime,
	Submit,
	FormGroup,
} from '@/Components/Form'
import { ModelsDropdown, VendorsDropdown, LocationsDropdown } from '@/Components/Form/Dropdowns'
import { type UseFormProps } from 'use-inertia-form'

export interface IItemFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<Schema.Item>) => boolean|void
	item: Partial<Schema.Item>
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
	manufacturers: Schema.Manufacturer[]
	categories: Schema.Category[]
}

const ItemForm = ({ to, method = 'post', onSubmit, item, models, vendors, locations, manufacturers, categories }: IItemFormProps) => {
	return (
		<Form
			model="item"
			data={ { item } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>

			<TextInput name="name" label="Name" required autoFocus />

			<FormGroup legend="Item Details">
				<ModelsDropdown
					models={ models }
					manufacturers={ manufacturers }
					categories={ categories }
				/>

				<TextInput name="serial" label="Serial" />

				<TextInput name="asset_tag" label="Asset Tag" />
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
