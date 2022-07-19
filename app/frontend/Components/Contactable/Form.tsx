import React, { useState } from 'react'
import { FormGroup } from '@/Components/Form'
import Address from './Address'
import Phone from './Phone'
import Email from './Email'
import Website from './Website'

interface IContactableFormProps {

}

const ContactableForm = ({  }: IContactableFormProps) => {
	const [phoneCount, setPhoneCount] = useState(0)
	const [emailCount, setEmailCount] = useState(0)
	const [websiteCount, setWebsiteCount] = useState(0)

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
