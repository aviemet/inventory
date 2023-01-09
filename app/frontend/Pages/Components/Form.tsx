import React from 'react'
import {
	Form,
	Input,
	Textarea,
	Checkbox,
	Submit,
	FormGroup,
} from '@/Components/Form'
import { ModelsDropdown, VendorsDropdown, LocationsDropdown } from '@/Components/Form/Dropdowns'

export interface IComponentFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	component: Schema.Component
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
	manufacturers: Schema.Manufacturer[]
	categories: Schema.Category[]
}

const ComponentForm = ({ to, method = 'post', onSubmit, component, models, vendors, locations, manufacturers, categories }: IComponentFormProps) => {
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
				<ModelsDropdown
					models={ models }
					manufacturers={ manufacturers }
					categories={ categories }
				/>

				<Input name="serial" label="Serial" />

				<Input name="asset_tag" label="Asset Tag" />

				<Input name="qty" label="Quantity" />

				<Input name="min_qty" label="Minimum Quantity" />
			</FormGroup>

			<FormGroup legend="Purchase Details">
				<VendorsDropdown vendors={ vendors } />

				<Input name="cost" label="Cost" />
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
				{ component.id ? 'Update' : 'Create' } Component
			</Submit>
		</Form>
	)
}

export default React.memo(ComponentForm)
