import React, { useMemo } from 'react'
import {
	Form,
	Input,
	Textarea,
	SearchableDropdown,
	Submit,
} from '@/Components/Form'
import { Inertia } from '@inertiajs/inertia'

export interface ICategoryFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	category?: Partial<Schema.Category>
}

const emptyCategory: Partial<Schema.Category> = {
	name: '',
	categorizable_type: '',
	description: '',
}

const categorizableTypes = ['Accessory', 'Address', 'Component', 'Consumable', 'Contact', 'Contract', 'Department', 'Email', 'Item', 'License', 'Location', 'Manufacturer', 'Model', 'Order', 'Person', 'Phone', 'Ticket', 'User', 'Vendor', 'Website']

const CategoryForm = ({ to, method = 'post', onSubmit, category = emptyCategory }: ICategoryFormProps) => {
	const types = useMemo(() => categorizableTypes.map(type => ({ name: type, id: type })), [])

	return (
		<Form
			model="category"
			data={ { category } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Input name="name" label="Name" required autoFocus />

			<SearchableDropdown
				label="Category Type"
				name="categorizable_type"
				options={ types }
				onOpen={ () => Inertia.reload({ only: ['vendors'] }) }
				required
			/>

			<Textarea name="description" label="Description" />

			<Submit>
				{ category.id ? 'Update' : 'Create' } Category
			</Submit>
		</Form>
	)
}

export default React.memo(CategoryForm)
