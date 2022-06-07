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

export interface IComponentFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	component: Schema.Component
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const ComponentForm = ({ to, method = 'post', onSubmit, component, models, vendors, locations }: IComponentFormProps) => {
	return (
		<Form
			model="component"
			data={ { component } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
			className="max-w-5xl"
		>
			<Input name="name" label="Name" required autoFocus />

			<Group legend="Component Details">
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
				{ component.id ? 'Update' : 'Create' } Component
			</Submit>
		</Form>
	)
}

export default React.memo(ComponentForm)
