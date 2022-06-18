import React from 'react'
import { Button } from '@/Components'
import { useForm } from './Form'
import { type ButtonProps } from '@mantine/core'

const Submit = ({ children, ...props }: ButtonProps<'button'>) => {
	const { processing } = useForm()

	return (
		<Button disabled={ processing } { ...props }>
			{ children }
		</Button>
	)
}

export default Submit
