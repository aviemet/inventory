import React from 'react'
import {
	Form,
	Input,
	Textarea,
	SearchableDropdown,
	Checkbox,
	Submit,
	FormGroup,
} from '@/Components/Form'
import { Inertia } from '@inertiajs/inertia'

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
		>
			<Input name="name" label="Name" required autoFocus />

			<FormGroup legend="Component Details">
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

				<Input name="min_qty" label="Minimum Quantity" />
			</FormGroup>

			<FormGroup legend="Purchase Details">
				<SearchableDropdown
					label="Vendor"
					name="vendor_id"
					options={ vendors }
					filterMatchKeys={ ['name'] }
					onOpen={ () => Inertia.reload({ only: ['vendors'] }) }
				/>

				<Input name="cost" label="Cost" />
			</FormGroup>

			<FormGroup legend="Usage Details">
				<SearchableDropdown
					label="Default Location"
					name="default_location_id"
					options={ locations }
					onOpen={ () => Inertia.reload({ only: ['locations'] }) }
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
