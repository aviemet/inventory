import React from 'react'
import cx from 'classnames'

interface IFieldProps {
	children: React.ReactNode
	type: string
	required?: boolean
	errors?: boolean
}

const Field = ({ children, type, required = false, errors = false }: IFieldProps) => {
	return (
		<div className={ cx(
			'field',
			type,
			{ 'required': required },
			{ 'field_with_errors': errors })
		}>
			{ children }
		</div>
	)
}

export default Field