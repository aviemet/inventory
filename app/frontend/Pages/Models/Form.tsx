import React from 'react'
import ManufacturersDropdown from '../../Components/Form/Dropdowns/ManufacturersDropdown'
import {
	Form,
	TextInput,
	Textarea,
	SearchableDropdown,
	Submit,
} from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { CategoriesDropdown } from '@/Components/Form/Dropdowns'

type TModelFormData = {
	model: Schema.ModelsFormData
}

export interface IModelFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TModelFormData>) => boolean|void
	category: Schema.CategoryTypes
	// model?: Schema.ModelsFormData
	// categories: Schema.CategoriesOptions[]
	// manufacturers: Schema.ManufacturersOptions[]
}

const emptyModel: Schema.ModelsFormData = {
	name: '',
	model_number: '',
	manufacturer_id: '',
	category_id: '',
}

const ModelForm = ({ to, method = 'post', onSubmit, model = emptyModel }: IModelFormProps) => {
	return (
		<Form
			model="model"
			data={ { model } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<TextInput name="model_number" label="Model Number" required />

			<ManufacturersDropdown />

			<CategoriesDropdown categorizable_type='Item' />

			{ /* <SearchableDropdown
				required
				label="Category"
				name="category_id"
				options={ categories }
				filterMatchKeys={ ['name'] }
			/> */ }

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ model?.id ? 'Update' : 'Create' } Model
			</Submit>
		</Form>
	)
}

export default React.memo(ModelForm)
