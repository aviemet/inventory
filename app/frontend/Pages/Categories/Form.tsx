import React, { useMemo } from 'react'
import {
	Form,
	TextInput,
	Textarea,
	SearchableDropdown,
	Submit,
} from '@/Components/Form'
import { router } from '@inertiajs/react'
import { type UseFormProps } from 'use-inertia-form'

interface CategoryFormData {
	category: Schema.Category
}

export interface ICategoryFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<CategoryFormData>) => boolean|void
	category?: Schema.Category
}

const emptyCategory: NewFormData<Schema.Category> = {
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
			<TextInput name="name" label="Name" required autoFocus />

			<SearchableDropdown
				label="Category Type"
				name="categorizable_type"
				options={ types }
				onOpen={ () => router.reload({ only: ['vendors'] }) }
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
