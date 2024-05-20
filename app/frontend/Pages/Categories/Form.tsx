import React, { useMemo } from 'react'
import {
	Form,
	TextInput,
	Textarea,
	Select,
	Submit,
} from '@/Components/Form'
import { router } from '@inertiajs/react'
import { type UseFormProps } from 'use-inertia-form'

interface CategoryFormData {
	category: Schema.CategoriesFormData
}

export interface CategoryFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<CategoryFormData>) => boolean|void
	category?: Schema.CategoriesFormData
}

const emptyCategory: Schema.CategoriesFormData = {
	name: '',
	categorizable_type: '',
	description: '',
}

const categorizableTypes = ['Accessory', 'Address', 'Component', 'Consumable', 'Contact', 'Contract', 'Department', 'Email', 'Item', 'License', 'Location', 'Manufacturer', 'Model', 'Order', 'Person', 'Phone', 'Ticket', 'User', 'Vendor', 'Website']

const CategoryForm = ({ to, method = 'post', onSubmit, category = emptyCategory }: CategoryFormProps) => {
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

			<Select
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
