import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

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
	return (
		<Form
			model="documentation"
			data={ { documentation } }
			method={ method }
			{ ...props }
		>
			<TextInput sort="slug" label="Slug" />
			<TextInput sort="title" label="Title" />
			<TextInput sort="body" label="Body" />
			<Submit>{ documentation.id ? 'Update' : 'Create' } Documentation</Submit>
		</Form>
	)
}

export default DocumentationForm
