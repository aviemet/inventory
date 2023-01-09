import React from 'react'
import cx from 'clsx'
import { type TInputType } from './Form'
import { Box, BoxProps } from '@mantine/core'

interface IFieldProps extends BoxProps {
	children: React.ReactNode
	type?: TInputType
	required?: boolean
	errors?: boolean
}

const Field = ({ children, type, required = false, errors = false, className, ...props }: IFieldProps) => {
	return (
		<Box
			className={ cx(
				'field',
				{ [String(type)]: type },
				{ 'required': required },
				{ 'field_with_errors': errors },
				className,
			) }
			{ ...props }
		>
			{ children }
		</Box>
	)
}

export default Field
