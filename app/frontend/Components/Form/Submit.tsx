import React, { forwardRef } from 'react'
import { Button } from '@/Components'
import { useForm } from './Form'
import { type ButtonProps } from '@mantine/core'

const Submit = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, ...props },
	ref
) => {
	const { processing } = useForm()

	return (
		<Button
			type="submit" 
			disabled={ processing } 
			sx={ { width: '100%' } } 
			{ ...props } 
			ref={ ref }
		>
			{ children }
		</Button>
	)
})

export default Submit
