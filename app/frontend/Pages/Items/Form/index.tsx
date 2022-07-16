import React from 'react'
import {
	Form,
	Input,
	Textarea,
	SearchableDropdown,
	Checkbox,
	DateTime,
	Submit,
	FormGroup,
} from '@/Components/Form'
import { Inertia } from '@inertiajs/inertia'
import VendorsForm from '@/Pages/Vendors/Form'
import { Routes } from '@/lib'

export interface IItemFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	item: Schema.Item
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const ItemForm = ({ to, method = 'post', onSubmit, item, models, vendors, locations }: IItemFormProps) => {
	return (
		<Form
			model="item"
			data={ { item } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>

			<Input name="name" label="Name" required autoFocus />

			<FormGroup legend="Item Details">
				<SearchableDropdown
					label="Model"
					name="model_id"
					required
					options={ models }
					fetchOnOpen="models"
				/>

				<Input name="serial" label="Serial" />

				<Input name="asset_tag" label="Asset Tag" />
			</FormGroup>

			<FormGroup legend="Purchase Details">
				<SearchableDropdown
					label="Vendor"
					name="vendor_id"
					options={ vendors }
					filterMatchKeys={ ['name'] }
					fetchOnOpen="vendors"
					newForm={ <VendorsForm to={ Routes.vendors() } redirect={ false } /> }
				/>

				<Input name="cost" label="Cost" type="currency" />

				<DateTime label="Purchased At" name="purchased_at" />
			</FormGroup>

			<FormGroup legend="Usage Details">

				<SearchableDropdown
					label="Default Location"
					name="default_location_id"
					options={ locations }
					fetchOnOpen="locations"
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
