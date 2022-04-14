import React from 'react'
import { Input } from '../Inputs'
import { InputProps } from 'react-html-props'
import { useForm, useInputProps } from './Form'
import classnames from 'classnames'

interface IInputProps extends InputProps {
	label?: string
	name: string
}

const FormInput = ({ label, name, required, onChange, type = 'text', id, ...props }: IInputProps) => {
	const { data, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	return (
		<>
			<Input
				id={ id || inputId }
				name={ inputName }
				label={ label }
				value={ data[name] }
				onChange={ e => {
					if(onChange) onChange(e)
					setData(name, e.target.value)
				} }
				type={ type }
				{ ...required }
				{ ...props }
			/>
			{ errors && <div className="feedback"></div> }
		</>
	)
}

export default FormInput
