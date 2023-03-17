import { Button } from '@/Components'
import { type ButtonProps } from '@mantine/core'
import React from 'react'
import { useForm } from 'use-inertia-form'

interface IResetButton extends ButtonProps {
	fields?: string|string[]
}

const ResetButton = ({ fields, children, ...props }: IResetButton) => {
	const { reset } = useForm()

	return (
		<Button onClick={ () => reset(fields) } { ...props }>{ children || 'Reset' }</Button>
	)
}

export default ResetButton
