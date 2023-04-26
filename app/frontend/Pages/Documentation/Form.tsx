import React from 'react'
import { Form, TextInput, Submit, RichText } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { CategoriesDropdown } from '@/Components/Form/Dropdowns'

type TDocumentationFormData = {
	documentation: Schema.DocumentationsFormData
}

export interface IDocumentationFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TDocumentationFormData>) => boolean|void
	documentation: Schema.DocumentationsFormData
	categories: Schema.CategoriesOptions[]
}

const DocumentationForm = ({ method = 'post', documentation, categories, ...props }: IDocumentationFormProps) => {
	console.log({ categories })
	return (
		<Form
			model="documentation"
			data={ { documentation } }
			method={ method }
			{ ...props }
		>
			<TextInput name="title" label="Title" />

			<CategoriesDropdown categories={ categories } />

			<RichText name="body" label="Body" />

			<Submit>{ documentation.id ? 'Update' : 'Create' } Documentation</Submit>
		</Form>
	)
}

export default DocumentationForm
