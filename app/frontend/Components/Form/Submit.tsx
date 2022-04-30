import React from 'react'
import { Button } from '@/Components'
import { useForm } from './Form'

const Submit = ({ children, ...props }) => {
	const { processing } = useForm()

	return (
		<Button disabled={ processing } { ...props }>
			{ children }
		</Button>
	)
}

export default Submit
