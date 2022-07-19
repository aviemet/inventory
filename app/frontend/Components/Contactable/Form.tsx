import React from 'react'
import { FormGroup, Input } from '@/Components/Form'
import Address from './Address'
import Phone from './Phone'
import Email from './Email'
import Website from './Website'

interface IContactableFormProps {

}

const ContactableForm = ({  }: IContactableFormProps) => {
	return (
		<FormGroup legend='Contact Information'>
			<Address />
			<Phone />
			<Email />
			<Website />
		</FormGroup>
	)
}

export default ContactableForm
