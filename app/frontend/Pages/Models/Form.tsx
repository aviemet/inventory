import React from 'react'
import ManufacturersDropdown from '../../Features/Dropdowns/ManufacturersDropdown/FormManufacturersDropdown'
import { Form, TextInput, Textarea, Submit } from '@/Components/Form'
import { CategoriesDropdown } from '@/Features/Dropdowns'
import { coerceArray } from '@/lib'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type ModelFormData = {
	model: Schema.ModelsFormData
}

export interface ModelFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<ModelFormData>) => boolean|void
	model?: Schema.ModelsFormData
}

const emptyModel: Schema.ModelsFormData = {
	name: '',
	model_number: '',
	manufacturer_id: NaN,
	category_id: NaN,
}

const ModelForm = ({ to, method = 'post', onSubmit, model = emptyModel }: ModelFormProps) => {
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

			<ManufacturersDropdown initialData={ coerceArray(model?.manufacturer) } />

			<CategoriesDropdown
				categorizable_type='Item'
				initialData={ coerceArray(model?.category) }
			/>

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ model?.id ? 'Update' : 'Create' } Model
			</Submit>
		</Form>
	)
}

export default ModelForm
