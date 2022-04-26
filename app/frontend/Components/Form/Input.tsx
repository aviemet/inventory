import React from 'react'
import { Input } from '../Inputs'
import { InputProps } from 'react-html-props'
import { useForm, useInputProps } from './Form'
import Field from './Field'
import Feedback from './Feedback'
import cn from 'classnames'

interface IInputProps extends Omit<InputProps, 'onChange'> {
	label?: string
	name: string
	model?: string
	onChange?: ({ value: unknown, setData: Function }) => void
}

const FormInput = ({ label, name, model, onChange, type = 'text', id, required, ...props }: IInputProps) => {
	const { data, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name, model)

	return (
		<Field
			type={ type }
			required={ required }
			errors={ !!errors?.[name] }
		>
			<Input
				id={ id || inputId }
				name={ inputName }
				label={ label }
				value={ data[inputName] }
				onChange={ e => {
					setData(inputName, e.target.value)
					if(onChange) onChange({ value: data[inputName], setData })
				} }
				type={ type }
				{ ...props }
			/>
			<Feedback errors={ errors[inputName] } />
		</Field>
	)
}

export default FormInput
