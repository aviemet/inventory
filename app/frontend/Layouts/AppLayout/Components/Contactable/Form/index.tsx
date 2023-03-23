import React from 'react'
import { FieldsFor } from '@/Components/Form'
import Address from './Address'
import Phone from './Phone'
import Email from './Email'
import Website from './Website'
import { Box } from '@mantine/core'

interface IContactableFormProps {
	contact?: Schema.Contact
}

const ContactableForm = ({ contact }: IContactableFormProps) => {
	return (
		<>
			<FieldsFor model="contacts" legend="Contact Information">
				<Phone />
				{ /* <Email />
			<Website />
			<Address /> */ }
			</FieldsFor>
		</>
	)
}

export default ContactableForm
