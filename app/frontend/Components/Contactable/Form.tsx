import React, { useState } from 'react'
import { FormGroup } from '@/Components/Form'
import Address from './Address'
import Phone from './Phone'
import Email from './Email'
import Website from './Website'
import { Box } from '@mantine/core'

interface IContactableFormProps {

}

const ContactableForm = ({  }: IContactableFormProps) => {
	const [phoneCount, setPhoneCount] = useState(0)
	const [emailCount, setEmailCount] = useState(0)
	const [websiteCount, setWebsiteCount] = useState(0)

	return (
		<>
			<Box>Contact Information</Box>
			<Address />
			<Phone />
			<Email />
			<Website />
		</>
	)
}

export default ContactableForm
