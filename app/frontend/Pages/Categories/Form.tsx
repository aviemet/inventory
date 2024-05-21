import React, { useMemo } from 'react'
import {
	Form,
	TextInput,
	Textarea,
	Select,
	Submit,
} from '@/Components/Form'
import { router } from '@inertiajs/react'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

interface CategoryFormData {
	category: Schema.CategoriesFormData
}

export interface CategoryFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<CategoryFormData>) => boolean|void
	category?: Schema.CategoriesFormData
	categoryType?: Schema.CategoryTypes
}

const emptyCategory: (categoryType?: Schema.CategoryTypes) => Schema.CategoriesFormData = (categoryType) => ({
	name: '',
	categorizable_type: categoryType || '',
	description: '',
})

const categorizableTypes: Schema.CategoryTypes[] = ['Accessory', 'Address', 'Component', 'Consumable', 'Contact', 'Contract', 'Department', 'Email', 'Item', 'License', 'Location', 'Manufacturer', 'Model', 'Order', 'Person', 'Phone', 'Ticket', 'User', 'Vendor', 'Website']

const CategoryForm = ({
	to,
	method = 'post',
	onSubmit,
	category,
	categoryType,
}: CategoryFormProps) => {
	const types = useMemo(() => categorizableTypes.map(type => ({ label: type, value: type })), [])

	const categoryData = useMemo(() => category || emptyCategory(categoryType), [category, categoryType])

	return (
		<Form
			model="category"
			data={ { category: categoryData } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<Select
				label="Category Type"
				name="categorizable_type"
				options={ types }
				onDropdownOpen={ () => router.reload({ only: ['vendors'] }) }
				required
				disabled={ categoryType !== undefined }
			/>

			<Textarea name="description" label="Description" />

			<Submit>
				{ categoryData.id ? 'Update' : 'Create' } Category
			</Submit>
		</Form>
	)
}

export default React.memo(CategoryForm)
