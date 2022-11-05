import React from 'react'
import {
	Form,
	Input,
	Textarea,
	Checkbox,
	DateTime,
	Submit,
	FormGroup,
} from '@/Components/Form'
import { ModelsDropdown, VendorsDropdown, LocationsDropdown } from '@/Components/Form/Dropdowns'

export interface IHardwareFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	hardware: Partial<Schema.Hardware>
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
	manufacturers: Schema.Manufacturer[]
	categories: Schema.Category[]
}

const HardwareForm = ({ to, method = 'post', onSubmit, hardware, models, vendors, locations, manufacturers, categories }: IHardwareFormProps) => {
	return (
		<Form
			model="hardware"
			data={ { hardware } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>

			<Input name="name" label="Name" required autoFocus />

			<FormGroup legend="Hardware Details">
				<ModelsDropdown
					models={ models }
					manufacturers={ manufacturers }
					categories={ categories }
				/>

				<Input name="serial" label="Serial" />

				<Input name="asset_tag" label="Asset Tag" />
			</FormGroup>

			<FormGroup legend="Purchase Details">
				<VendorsDropdown vendors={ vendors } />

				<Input name="cost" label="Cost" type="currency" />

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
				{ hardware.id ? 'Update' : 'Create' } Hardware
			</Submit>

		</Form>
	)
}

export default React.memo(HardwareForm)
