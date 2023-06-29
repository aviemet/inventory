import React from 'react'
import ManufacturersDropdown from '../../Components/Form/Dropdowns/ManufacturersDropdown'
import { Form, TextInput, Textarea, Submit } from '@/Components/Form'
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
	model?: Schema.ModelsFormData
}

const emptyModel: Schema.ModelsFormData = {
	name: '',
	model_number: '',
	manufacturer_id: undefined,
	category_id: undefined,
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

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ model?.id ? 'Update' : 'Create' } Model
			</Submit>
		</Form>
	)
}

export default React.memo(ModelForm)
