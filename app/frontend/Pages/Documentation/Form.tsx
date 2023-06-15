import React from 'react'
import { Form, TextInput, Submit, RichText } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import DocumentableSearchDropdown from '@/Components/Form/Dropdowns/DocumentableSearchDropdown'
import { omit } from 'lodash'

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
			data={ { documentation: omit(documentation, ['id', 'created_by']) as Schema.DocumentationsFormData } }
			method={ method }
			{ ...props }
		>
			<DocumentableSearchDropdown
				label="Referencing"
				required
			/>

			<TextInput name="title" label="Title" required />

			<RichText name="body" label="Body" />

			<Submit>{ documentation.id ? 'Update' : 'Create' } Documentation</Submit>
		</Form>
	)
}

export default DocumentationForm
