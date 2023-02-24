import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { ContactForm } from '@/Layouts/AppLayout/Components/Contactable'
import { type UseFormProps } from 'use-inertia-form'

export interface IVendorFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps) => boolean|void
	vendor?: Partial<Schema.Vendor>
}

const emptyVendor: Partial<Schema.Vendor> = {
	name: '',
	url: '',
}

const VendorForm = ({ to, method = 'post', onSubmit, vendor = emptyVendor }: IVendorFormProps) => {
	return (
		<Form
			model="vendor"
			data={ { vendor } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<TextInput name="url" label="Website" />

			<ContactForm />

			<Submit>
				{ vendor.id ? 'Update' : 'Create' } Vendor
			</Submit>
		</Form>
	)
}

export default React.memo(VendorForm)
