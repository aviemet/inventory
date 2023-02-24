import React from 'react'
import {
	Form,
	TextInput,
	Textarea,
	SearchableDropdown,
	Checkbox,
	Submit,
	FormGroup,
} from '@/Components/Form'
import { router } from '@inertiajs/react'
import { type UseFormProps } from 'use-inertia-form'

export interface IConsumableFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps) => boolean|void
	consumable: Schema.Consumable
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const ConsumableForm = ({ to, method = 'post', onSubmit, consumable, models, vendors, locations }: IConsumableFormProps) => {
	return (
		<Form
			model="consumable"
			data={ { consumable } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
			className="max-w-5xl"
		>
			<TextInput name="name" label="Name" required autoFocus />

			<FormGroup legend="Consumable Details">
				<SearchableDropdown
					label="Model"
					name="model_id"
					required
					options={ models }
					onOpen={ () => router.reload({ only: ['models'] }) }
				/>

				<TextInput name="serial" label="Serial" />

				<TextInput name="asset_tag" label="Asset Tag" />

				<TextInput name="qty" label="Quantity" />

				<TextInput name="min_qty" label="Minimum Quantity" />
			</FormGroup>

			<FormGroup legend="Purchase Details">
				<SearchableDropdown
					label="Vendor"
					name="vendor_id"
					options={ vendors }
					filterMatchKeys={ ['name'] }
					onOpen={ () => router.reload({ only: ['vendors'] }) }
				/>

				<TextInput name="cost" label="Cost" />
			</FormGroup>

			<FormGroup legend="Usage Details">
				<SearchableDropdown
					label="Default Location"
					name="default_location_id"
					options={ locations }
					onOpen={ () => router.reload({ only: ['locations'] }) }
				/>

				<Checkbox name="requestable" label="Requestable" />

			</FormGroup>

			<Textarea name="notes" label="Notes" />

			<Submit className="w-full">
				{ consumable.id ? 'Update' : 'Create' } Consumable
			</Submit>
		</Form>
	)
}

export default React.memo(ConsumableForm)
