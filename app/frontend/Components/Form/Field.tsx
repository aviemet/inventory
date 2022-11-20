import React from 'react'
import cx from 'clsx'
import { DivProps } from 'react-html-props'
import { type TInputType } from './Form'

interface IFieldProps extends DivProps {
	children: React.ReactNode
	type?: TInputType
	required?: boolean
	errors?: boolean
}

const Field = ({ children, type, required = false, errors = false, className, ...props }: IFieldProps) => {
	return (
		<div
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
		</div>
	)
}

export default Field
