import React from 'react'
import { Form, TextInput, Submit, RichText, FormConsumer, HiddenInput } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import FullSearchDropdown from '@/Components/Form/Dropdowns/FullSearchDropdown'
import { Routes, polymorphicRoute } from '@/lib'
import DocumentationSearch from '@/Components/Form/Autocompletes/DocumentationSearch'

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
			data={ { documentation } }
			method={ method }
			{ ...props }
		>
			<FormConsumer onChange={ ({ data }) => console.log({ data }) } />

			<DocumentationSearch
				name="documentable_id"
				label="Referencing"
				required
			/>

			{ /* <FullSearchDropdown
				name="documentable_id"
				label="Referencing"
				onChange={ (value, { setData }) => setData('documentation.documentable_type', value.searchable_type)  }
			/> */ }
			<HiddenInput name="documentable_type" />

			<TextInput name="title" label="Title" required />

			<RichText name="body" label="Body" />

			<Submit>{ documentation.id ? 'Update' : 'Create' } Documentation</Submit>
		</Form>
	)
}

export default DocumentationForm
