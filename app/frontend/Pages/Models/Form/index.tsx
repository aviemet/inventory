import React from 'react'
import {
	Form,
	Input,
	Textarea,
	SearchableDropdown,
	Submit,
} from '@/Components/Form'
import { Inertia } from '@inertiajs/inertia'

export interface IModelFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	model?: Partial<Schema.Model>
	categories: Schema.Category[]
	manufacturers: Schema.Manufacturer[]
}

const emptyModel: Partial<Schema.Model> = {
	name: '',
	model_number: '',
	manufacturer_id: '',
	category_id: ''
}

const ModelForm = ({ to, method = 'post', onSubmit, model = emptyModel, categories, manufacturers }: IModelFormProps) => {
	return (
		<Form
			model="model"
			data={ { model } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Input name="name" label="Name" required autoFocus />

			<Input name="model_number" label="Model Number" required />

			<SearchableDropdown
				required
				label="Manufacturer"
				name="manufacturer_id"
				options={ manufacturers }
				filterMatchKeys={ ['name'] }
				fetchOnOpen="manufacturers"
			/>

			<SearchableDropdown
				required
				label="Category"
				name="category_id"
				options={ categories }
				filterMatchKeys={ ['name'] }
				fetchOnOpen="categories"
			/>

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ model?.id ? 'Update' : 'Create' } Model
			</Submit>
		</Form>
	)
}

export default React.memo(ModelForm)
