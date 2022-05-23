import React, { forwardRef } from 'react'
import { InputProps } from 'react-html-props'
import cn from 'classnames'

interface IInputProps extends InputProps {
	label?: string
	name?: string
}

const Input = forwardRef<HTMLInputElement, IInputProps>((
	{ label, required = false, value, onChange, type = 'text', id, pattern, ...props },
	ref,
) => {
	return (
		<>
			{ label && <label className={ cn({ 'required': required }) } htmlFor={ id }>
				{ label }
			</label> }
			<input
				id={ id }
				value={ value }
				onChange={ onChange }
				type={ type }
				required={ required }
				ref={ ref }
				pattern={ pattern }
				{ ...props }
			/>
		</>
	)
})

export default Input

