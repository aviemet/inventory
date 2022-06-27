import React from 'react'
import cx from 'clsx'
import { DivProps } from 'react-html-props'

interface IFieldProps extends DivProps {
	children: React.ReactNode
	type: string
	required?: boolean
	errors?: boolean
}

const Field = ({ children, type, required = false, errors = false, className, ...props }: IFieldProps) => {
	return (
		<div
			className={ cx(
				'field',
				type,
				{ 'required': required },
				{ 'field_with_errors': errors },
				className
			) }
			{ ...props }
		>
			{ children }
		</div>
	)
}

export default Field
