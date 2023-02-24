import React, { forwardRef } from 'react'
import React, { forwardRef } from 'react'
import { Button } from '@/Components'
import { Submit as SubmitButton } from 'use-inertia-form'
import { Box, type ButtonProps } from '@mantine/core'

const Submit = forwardRef<HTMLButtonElement, ButtonProps>((
	{ children, ...props },
	ref,
) => {
	return (
		<Box className="submit">
			<SubmitButton
				component={ <Button /> }
				ref={ ref }
				sx={ { width: '100%' } }
				{ ...props }
			>
				{ children }
			</SubmitButton>
		</Box>
	)
})
})

export default Submit
