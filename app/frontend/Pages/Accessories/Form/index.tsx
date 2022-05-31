import React from 'react'
import {
	Form,
	Input,
	Textarea,
	SearchableDropdown,
	Checkbox,
	DateTime,
	Submit,
	Group,
} from '@/Components/Form'

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
			className="max-w-5xl"
		>
			<Input name="name" label="Name" required autoFocus />

			<Group legend="Accessory Details">
				<SearchableDropdown
					label="Model"
					name="model_id"
					required
					options={ models }
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
				/>

				<Input name="cost" label="Cost" />
			</Group>

			<Group legend="Usage Details">
				<SearchableDropdown
					label="Default Location"
					name="default_location_id"
					options={ locations }
				/>

				<Checkbox name="requestable" label="Requestable" />

			</Group>

			<Textarea name="notes" label="Notes" />

			<Submit className="w-full">
				{ accessory.id ? 'Update' : 'Create' } Accessory
			</Submit>
		</Form>
	)
}

export default React.memo(AccessoryForm)
