import React from 'react'
import { FieldsFor } from '@/Components/Form'
import Address from './Address'
import Phone from './Phone'
import Email from './Email'
import Website from './Website'
import { Box } from '@mantine/core'

interface ContactableFormProps {
	contact: Schema.ContactsFormData
}

const ContactableForm = ({ contact }: ContactableFormProps) => {
	return (
		<>
			<FieldsFor model="contact" legend="Contact Information">
				<Phone />
				{ /* <Email />
			<Website />
			<Address /> */ }
			</FieldsFor>
		</>
	)
}

export default ContactableForm
