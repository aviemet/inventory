import React from 'react'
import {
	Form,
	Input,
	Submit,
} from '@/Components/Form'

export interface ICompanyFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	company: Partial<Schema.Company>
}

const CompanyForm = ({ to, method = 'post', onSubmit, company }: ICompanyFormProps) => {
	return (
		<Form
			model="company"
			data={ { company } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
			className="max-w-5xl"
		>
			<Input name="name" label="Company Name" required autoFocus />

			<Submit className="w-full">
				{ company.id ? 'Update' : 'Create' } Company
			</Submit>
		</Form>
	)
}

export default React.memo(CompanyForm)
