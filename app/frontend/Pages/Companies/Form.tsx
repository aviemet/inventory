import React from 'react'
import {
	Form,
	TextInput,
	Submit,
} from '@/Components/Form'
import { ContactForm } from '@/Layouts/AppLayout/Components/Contactable'
import { type UseFormProps } from 'use-inertia-form'

type TCompanyFormData = {
	company: Schema.CompaniesFormData
}

export interface ICompanyFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TCompanyFormData>) => boolean|void
	company: Schema.CompaniesFormData
}

const CompanyForm = ({ to, method = 'post', onSubmit, company }: ICompanyFormProps) => {
	return (
		<Form
			model="company"
			data={ { company } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Company Name" required autoFocus />

			<ContactForm contact={ company.contact } />

			<Submit>
				{ company.id ? 'Update' : 'Create' } Company
			</Submit>
		</Form>
	)
}

export default React.memo(CompanyForm)
