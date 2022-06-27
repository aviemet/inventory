import React from 'react'
import {
	Form,
	Input,
	Textarea,
	SearchableDropdown,
	Checkbox,
	Submit,
	Group,
} from '@/Components/Form'
import { Inertia } from '@inertiajs/inertia'

export interface IAccessoryFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	accessory: Schema.Accessory
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const AccessoryForm = ({ to, method = 'post', onSubmit, accessory, models, vendors, locations }: IAccessoryFormProps) => {
	return (
		<Form
			model="accessory"
			data={ { accessory } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Input name="name" label="Name" required autoFocus />

			<Group legend="Accessory Details">
				<SearchableDropdown
					label="Model"
					name="model_id"
					required
					options={ models }
					onOpen={ () => Inertia.reload({ only: ['models'] }) }
				/>

				<Input name="serial" label="Serial" />

				<Input name="asset_tag" label="Asset Tag" />

				<Input name="qty" label="Quantity" />

				{ /* TODO: Alert options dialog */ }
				<Input name="min_qty" label="Minimum Quantity" />
			</Group>

			<Group legend="Purchase Details">
				<SearchableDropdown
					label="Vendor"
					name="vendor_id"
					options={ vendors }
					filterMatchKeys={ ['name'] }
					onOpen={ () => Inertia.reload({ only: ['vendors'] }) }
				/>

				<Input name="cost" label="Cost" />
			</Group>

			<Group legend="Usage Details">
				<SearchableDropdown
					label="Default Location"
					name="default_location_id"
					options={ locations }
					onOpen={ () => Inertia.reload({ only: ['locations'] }) }
				/>

				<Checkbox name="requestable" label="Requestable" />

			</Group>

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ accessory.id ? 'Update' : 'Create' } Accessory
			</Submit>
		</Form>
	)
}

export default React.memo(AccessoryForm)
