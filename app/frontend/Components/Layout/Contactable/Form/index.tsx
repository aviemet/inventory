import React, { useState } from 'react'
import { FormGroup } from '@/Components/Form'
import Address from './Address'
import Phone from './Phone'
import Email from './Email'
import Website from './Website'
import { Box } from '@mantine/core'
import { useListState } from '@/Components/Hooks'

interface IContactableFormProps {
	contact?: Schema.Contact
}

const ContactableForm = ({ contact }: IContactableFormProps) => {
	const [addressInputs, inputHandler] = useListState([])

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
