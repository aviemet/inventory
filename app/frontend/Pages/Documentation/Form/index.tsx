import React from 'react'
import { Grid } from '@/components'
import { Form, TextInput, Submit, RichText } from '@/components/Form'
import DocumentableSearch from './DocumentableSearch'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'
import { FormCategoriesDropdown } from '@/Features'

type DocumentationFormData = {
	documentation: Schema.DocumentationsFormData
}

export interface DocumentationFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<DocumentationFormData>) => boolean | void
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
			<Grid>


				<Grid.Col>
					<TextInput name="title" label="Title" required />
				</Grid.Col>

				<Grid.Col>
					<DocumentableSearch
						name="documentable_id"
						label="Referencing"
						required
					/>
				</Grid.Col>

				<Grid.Col>
					<FormCategoriesDropdown categorizable_type="Documentation" />
				</Grid.Col>


				<Grid.Col>
					<RichText name="body" label="Documentation Content" />
				</Grid.Col>

				<Grid.Col>
					<Submit>{ documentation.id ? 'Update' : 'Create' } Documentation</Submit>
				</Grid.Col>

			</Grid>
		</Form>
	)
}

export default DocumentationForm
