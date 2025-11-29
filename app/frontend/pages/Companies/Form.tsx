import React from 'react'
import { Grid } from '@/components'
import { Form, TextInput, Submit } from '@/components/Form'
import { ContactForm } from '@/features/Contactable'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'
import { FormCurrenciesDropdown } from '@/features/Dropdowns'

type CompanyFormData = {
	company: Schema.CompaniesFormData
}

export interface CompanyFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<CompanyFormData>) => boolean | void
	company: Schema.CompaniesFormData
}

const CompanyForm = ({ to, method = 'post', onSubmit, company }: CompanyFormProps) => {
	return (
		<Form
			model="company"
			data={ { company } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="name" label="Company Name" required />
				</Grid.Col>
				<Grid.Col>
					<FormCurrenciesDropdown
						label="Default Currency"
						name="default_currency"
					/>
				</Grid.Col>

				<Grid.Col>
					<ContactForm contact={ company.contact } />
				</Grid.Col>

				<Grid.Col>
					<Submit>
						{ company.id ? 'Update' : 'Create' } Company
					</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default CompanyForm
