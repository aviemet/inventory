import React, { forwardRef } from 'react'
import { Button, Link } from '@/Components'
import { Submit as SubmitButton } from 'use-inertia-form'
import { Flex, type ButtonProps } from '@mantine/core'

interface ISubmitButtonProps extends ButtonProps {
	cancelRoute?: string
	requiredFields?: string[]
}

const Submit = forwardRef<HTMLButtonElement, ISubmitButtonProps>((
	{ children, cancelRoute, style, ...props },
	ref,
) => {
	return (
		<Flex gap="md" className="submit">
			<Button
				component={ SubmitButton }
				style={ [{ flex: 1 }, style] }
				ref={ ref }
				{ ...props }
			>
				{ children }
			</Button>
			{ cancelRoute && (
				<Link mt={ 10 } href={ cancelRoute } as="button">Cancel</Link>
			) }
		</Flex>
	)
})

export default Submit
