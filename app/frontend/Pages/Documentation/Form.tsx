import React from 'react'
import { Form, TextInput, Submit, RichText, FormConsumer, SearchableDropdown } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import FullSearchDropdown from '@/Components/Form/Dropdowns/FullSearchDropdown'

type TDocumentationFormData = {
	documentation: Schema.DocumentationsFormData
}

export interface IDocumentationFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TDocumentationFormData>) => boolean|void
	documentation: Schema.DocumentationsFormData
}

const DocumentationForm = ({ method = 'post', documentation, ...props }: IDocumentationFormProps) => {
	const handleChange = ({ data }) => {
		console.log({ data })
	}

	return (
		<Form
			model="documentation"
			data={ { documentation } }
			method={ method }
			{ ...props }
		>
			<FormConsumer onChange={ handleChange } />

			<FullSearchDropdown name="documentable.id" label="Referencing" />

			<TextInput name="title" label="Title" />

			<RichText name="body" label="Body" />

			<Submit>{ documentation.id ? 'Update' : 'Create' } Documentation</Submit>
		</Form>
	)
}

export default DocumentationForm
