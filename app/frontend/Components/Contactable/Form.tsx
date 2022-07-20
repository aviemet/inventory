import React, { useState } from 'react'
import { FormGroup } from '@/Components/Form'
import Address from './Address'
import Phone from './Phone'
import Email from './Email'
import Website from './Website'
import { Box } from '@mantine/core'
import { useListState } from '@/Components/Hooks'

interface IContactableFormProps {

}

const ContactableForm = ({  }: IContactableFormProps) => {
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
