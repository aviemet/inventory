import React from 'react'
import { Input } from '../Inputs'
import { InputProps } from 'react-html-props'
import { useForm, useInputProps } from './Form'
import Field from './Field'
import Feedback from './Feedback'
import cx from 'classnames'

interface IInputProps extends Omit<InputProps, 'onChange'> {
	label?: string
	name: string
	onChange?: ({ value: unknown, setData: Function }) => void
}

const FormInput = ({ label, name, onChange, type = 'text', id, required, ...props }: IInputProps) => {
	const { data, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	return (
		<Field type={ type } required={ required } errors={ !!errors?.[name] }>
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
				{ ...props }
			/>
			<Feedback errors={ errors[name] } />
		</Field>
	)
}

export default FormInput
