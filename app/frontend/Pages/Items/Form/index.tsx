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

export interface IItemFormProps {
	to: string
	method?: HTTPVerb
	item: Schema.Item
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const ItemForm = ({ to, method = 'post', item, models, vendors, locations }: IItemFormProps) => {
	const handleSubmit = () => {
	}

	return (
		<Form
			model="item"
			data={ { item } }
			to={ to }
			method={ method }
			onSubmit={ handleSubmit }
			className="max-w-5xl"
		>

			<Input name="name" label="Name" required autoFocus />

			<Group legend="Item Details">
				<SearchableDropdown
					label="Model"
					name="model_id"
					required
					options={ models }
				/>

				<Input name="serial" label="Serial" />

				<Input name="asset_tag" label="Asset Tag" />
			</Group>

			<Group legend="Purchase Details">
				<SearchableDropdown
					label="Vendor"
					name="vendor_id"
					options={ vendors }
					filterMatchKeys={ ['name'] }
				/>

				<Input name="cost" label="Cost" />

				<DateTime label="Purchased At" name="purchased_at" />
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
				{ item.id ? 'Update' : 'Create' } Item
			</Submit>

		</Form>
	)
}

export default React.memo(ItemForm)
