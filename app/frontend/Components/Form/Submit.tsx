import React, { forwardRef } from 'react'
import { Button } from '@/Components'
import { Submit as SubmitButton, useForm } from 'use-inertia-form'
import { Box, type ButtonProps } from '@mantine/core'

const Submit = forwardRef<HTMLButtonElement, ButtonProps>((
	{ children, disabled, ...props },
	ref,
) => {
	const { processing, isDirty } = useForm()
	return (
		<Box className="submit">
			<SubmitButton
				component={ <Button /> }
				ref={ ref }
				sx={ { width: '100%' } }
				disabled={ disabled || processing || !isDirty }
				{ ...props }
			>
				{ children }
			</SubmitButton>
		</Box>
	)
})

export default Submit
