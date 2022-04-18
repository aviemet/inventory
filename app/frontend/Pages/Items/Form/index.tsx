import React from 'react'
import {
	Form,
	Input,
	Textarea,
	SearchableDropdown,
	Checkbox,
	DateTime,
	Submit
} from '@/Components/Form'
import { Link } from '@/Components'
import { Routes } from '@/lib'
import { useAuth } from '@/Providers'
import tw from 'twin.macro'

export interface IItemFormProps {
	item: Schema.Item
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const ItemForm = ({ item, models, vendors, locations }: IItemFormProps) => {
	const { user } = useAuth()

	const handleSubmit = ({ transform }) => {
		transform(data => ({
			item: { ...data },
			company: {
				id: user.active_company_id
			}
		}))
	}

	const handleChange = ({ data }) => {
		// console.log({ data })
	}

	return (
		<Form
			model="item"
			data={ item }
			to={ Routes.items() }
			onSubmit={ handleSubmit }
			onChange={ handleChange }
			className="max-w-5xl"
		>

			<Input name="name" label="Name" required />

			<Input name="asset_tag" label="Asset Tag" />

			<Input name="serial" label="Serial" />


			<SearchableDropdown
				label="Model"
				name="model"
				required
				options={ models }
				getLabel={ option => option.name }
				getValue={ option => option.id }
			/>

			<SearchableDropdown
				label="Vendor"
				name="vendor"
				options={ vendors }
				getLabel={ option => option.name }
				getValue={ option => option.id }
			/>

			<Input name="cost" label="Cost" />

			<DateTime label="Purchased At" name="purchased_at" />

			<SearchableDropdown
				label="Default Location"
				name="default_location"
				options={ locations }
				getLabel={ option => option.name }
				getValue={ option => option.id }
			/>

			{ /* <Input name="ip" label="IP Address" /> */ }

			<Checkbox name="requestable" label="Requestable" />

			<Textarea name="notes" label="Notes" />

			<Submit className="w-full">Create Item</Submit>

		</Form>
	)
}

export default React.memo(ItemForm)
