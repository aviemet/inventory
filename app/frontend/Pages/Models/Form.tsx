import React from 'react'
import { Grid } from '@/Components'
import { Form, TextInput, Textarea, Submit } from '@/Components/Form'
import { FormCategoriesDropdown, FormManufacturersDropdown } from '@/Features/Dropdowns'
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
			<Grid>

				<Grid.Col>
					<TextInput name="name" label="Name" required />
				</Grid.Col>

				<Grid.Col>
					<TextInput name="model_number" label="Model Number" required />
				</Grid.Col>

				<Grid.Col>
					<FormManufacturersDropdown initialData={ coerceArray(model?.manufacturer) } />
				</Grid.Col>

				<Grid.Col>
					<FormCategoriesDropdown
						categorizable_type='Item'
						initialData={ coerceArray(model?.category) }
					/>
				</Grid.Col>

				<Grid.Col>
					<Textarea name="notes" label="Notes" />
				</Grid.Col>

				<Grid.Col>
					<Submit>
						{ model?.id ? 'Update' : 'Create' } Model
					</Submit>
				</Grid.Col>

			</Grid>
		</Form>
	)
}

export default ModelForm
