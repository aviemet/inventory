import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { ContactForm } from '@/Features/Contactable'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'
import { FormCurrenciesDropdown } from '@/Features/Dropdowns'

type CompanyFormData = {
	company: Schema.CompaniesFormData
}

export interface CompanyFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<CompanyFormData>) => boolean|void
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
			<TextInput name="name" label="Company Name" required autoFocus />

			<FormCurrenciesDropdown
				label="Default Currency"
				name="default_currency"
			/>

			<ContactForm contact={ company.contact } />

			<Submit>
				{ company.id ? 'Update' : 'Create' } Company
			</Submit>
		</Form>
	)
}

export default CompanyForm
