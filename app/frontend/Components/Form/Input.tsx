import React, { useEffect } from 'react'
import { InputProps } from 'react-html-props'
import { useForm, useInputProps } from './Form'

interface IInputProps extends InputProps {
	label?: string
	name: string
}

const Input = ({ label, name, onChange, type, id, ...props }: IInputProps) => {
	const { data, setData } = useForm()
	const { inputId, inputName } = useInputProps(name)

	return (
		<>
			{ label && <label>{ label }</label> }
			<input
				id={ id || inputId }
				name={ inputName }
				value={ data[name] }
				onChange={ e => {
					if(onChange) onChange(e)
					setData(name, e.target.value)
				} }
				type={ type || 'text' }
				{ ...props }
			/>
		</>
	)
}

export default Input

