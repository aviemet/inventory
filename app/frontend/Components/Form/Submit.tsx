import React, { forwardRef } from 'react'
import { Button, Link } from '@/Components'
import { Submit as SubmitButton, useForm } from 'use-inertia-form'
import { Flex, type Sx, type ButtonProps } from '@mantine/core'

interface ISubmitButtonProps extends ButtonProps {
	wrapperSx?: Sx
	cancelRoute?: string
	requiredFields?: string[]
}

const Submit = forwardRef<HTMLButtonElement, ISubmitButtonProps>((
	{ children, disabled, wrapperSx, sx, cancelRoute, ...props },
	ref,
) => {
	const { isDirty } = useForm()

	return (
		<Flex gap="md" className="submit" sx={ wrapperSx }>
			<SubmitButton
				component={ Button }
				ref={ ref }
				sx={ [{ flex: 1 }, sx] }
				disabled={ disabled || !isDirty }
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
