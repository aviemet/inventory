import React, { forwardRef } from 'react'
import { Button, Link } from '@/Components'
import { Submit as SubmitButton } from 'use-inertia-form'
import { Flex, type Sx, type ButtonProps } from '@mantine/core'

interface ISubmitButtonProps extends ButtonProps {
	sx?: Sx
	wrapperSx?: Sx
	cancelRoute?: string
	requiredFields?: string[]
}

const Submit = forwardRef<HTMLButtonElement, ISubmitButtonProps>((
	{ children, wrapperSx, sx, cancelRoute, ...props },
	ref,
) => {
	return (
		<Flex gap="md" className="submit" sx={ wrapperSx }>
			<SubmitButton
				sx={ [{ flex: 1 }, sx] }
				component={ Button }
				ref={ ref }
				{ ...props }
			>
				{ children }
			</SubmitButton>
			{ cancelRoute && (
				<Link mt={ 10 } href={ cancelRoute } as="button">Cancel</Link>
			) }
		</Flex>
	)
})

export default Submit
