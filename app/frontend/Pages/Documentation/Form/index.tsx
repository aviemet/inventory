import React from 'react'
import { Form, TextInput, Submit, RichText } from '@/Components/Form'
import DocumentableSearch from './DocumentableSearch'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'
import { FormCategoriesDropdown } from '@/Features'

type DocumentationFormData = {
	documentation: Schema.DocumentationsFormData
}

export interface DocumentationFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<DocumentationFormData>) => boolean|void
	documentation: Schema.DocumentationsFormData
}

const DocumentationForm = ({
	method = 'post',
	documentation,
	...props
}: DocumentationFormProps) => {
	return (
		<Form
			model="documentation"
			data={ { documentation } }
			method={ method }
			filter={ ['route', 'category', 'documentable_name'] }
			{ ...props }
		>
			<DocumentableSearch
				name="documentable_id"
				label="Referencing"
				required
			/>

			<FormCategoriesDropdown categorizable_type="Document" />

			<TextInput name="title" label="Title" required />

			<RichText name="body" label="Documentation Content" />

			<Submit>{ documentation.id ? 'Update' : 'Create' } Documentation</Submit>
		</Form>
	)
}

export default DocumentationForm
