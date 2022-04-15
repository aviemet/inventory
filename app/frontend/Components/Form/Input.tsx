import React from 'react'
import { Input } from '../Inputs'
import { InputProps } from 'react-html-props'
import { useForm, useInputProps } from './Form'
import cx from 'classnames'

interface IInputProps extends  Omit<InputProps, 'onChange'> {
	label?: string
	name: string
	onChange?: ({ value: unknown, setData: Function }) => void
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
					setData(name, e.target.value)
					if(onChange) onChange({ value: data[name], setData })
				} }
				type={ type }
				{ ...required }
				{ ...props }
			/>
			{ errors && <div className="feedback">
				{ errors[name] }
			</div> }
		</>
	)
}

export default FormInput
