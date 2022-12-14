import React, { forwardRef } from 'react'
import { Button } from '@/Components'
import { useForm } from './Form'
import { Box, type ButtonProps } from '@mantine/core'

const Submit = forwardRef<HTMLButtonElement, ButtonProps>((
	{ children, ...props },
	ref,
) => {
	const { processing } = useForm()

	return (
		<Box className="submit">
			<Button
				type="submit"
				disabled={ processing }
				sx={ { width: '100%' } }
				{ ...props }
				ref={ ref }
			>
				{ children }
			</Button>
		</Box>
	)
})

export default Submit
