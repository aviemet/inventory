import React from 'react'
import { Button } from '@/Components'
import { useForm } from './Form'
import { ButtonProps } from 'react-html-props'

const Submit = ({ children, ...props }: ButtonProps) => {
	const { processing } = useForm()

	return (
		<Button disabled={ processing } { ...props }>
			{ children }
		</Button>
	)
}

export default Submit
