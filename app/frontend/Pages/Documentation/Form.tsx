import React from 'react'
import { Form, TextInput, Submit, RichText, FormConsumer, HiddenInput } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import DocumentableSearchDropdown from '@/Components/Form/Dropdowns/DocumentableSearchDropdown'
import { Routes, polymorphicRoute } from '@/lib'
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
	console.log({ documentation })
	return (
		<Form
			model="documentation"
			data={ { documentation: omit(documentation, ['id', 'created_by']) } }
			method={ method }
			{ ...props }
		>
			<FormConsumer onChange={ ({ data }) => console.log({ data }) } />

			<DocumentableSearchDropdown
				name="documentable_id"
				label="Referencing"
				onChange={ (value, { setData }) => setData('documentation.documentable_type', value.searchable_type) }
				required
			/>

			<HiddenInput name="documentable_type" />

			<TextInput name="title" label="Title" required />

			<RichText name="body" label="Body" />

			<Submit>{ documentation.id ? 'Update' : 'Create' } Documentation</Submit>
		</Form>
	)
}

export default DocumentationForm
