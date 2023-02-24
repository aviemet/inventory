import React from 'react'
import cx from 'clsx'
import { Box, BoxProps } from '@mantine/core'

interface IFieldProps extends BoxProps {
interface IFieldProps extends BoxProps {
	children: React.ReactNode
	type?: TInputType
	type?: TInputType
	required?: boolean
	errors?: boolean
}

const Field = ({ children, type, required = false, errors = false, className, ...props }: IFieldProps) => {
	return (
		<Box
		<Box
			className={ cx(
				'field',
				{ [String(type)]: type },
				{ [String(type)]: type },
				{ 'required': required },
				{ 'field_with_errors': errors },
				className,
				className,
			) }
			{ ...props }
		>
			{ children }
		</Box>
		</Box>
	)
}

export default Field
