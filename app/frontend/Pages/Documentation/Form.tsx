import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

export interface DocumentationFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<Schema.Documentation>) => boolean|void
	documentation: Partial<Schema.Documentation>
}

const DocumentationForm = ({ to, method = 'post', onSubmit, documentation }: DocumentationFormProps) => {
	return (
		<Form
			model="documentation"
			data={ { documentation } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="documentation.slug" label="Slug" />
			<TextInput name="documentation.title" label="Title" />
			<TextInput name="documentation.body" label="Body" />
			<Submit>{ documentation.id ? 'Update' : 'Create' } Documentation</Submit>
		</Form>
	)
}

export default DocumentationForm
