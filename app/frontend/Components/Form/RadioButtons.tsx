import React from 'react'
import RadioButtons, { type TOption } from '../Inputs/RadioButtons'
import Field from './Field'
import Feedback from './Feedback'
import { useForm, useInputProps } from './Form'
import { InputProps } from 'react-html-props'

interface IFormRadioButtonsProps extends Omit<InputProps, 'onChange'> {
	label: string
	labelPosition?: 'start'|'end'
	options: TOption[]
	name: string
	id?: string
	model?: string
	required?: boolean
	onChange?: Function
}

const FormRadioButtons = ({ options, name, id, model, onChange, required, ...props }: IFormRadioButtonsProps) => {
	const { data, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name, model)

	const handleChange = value => {
		setData(name, value)
		if(onChange) onChange({ value, setData })
	}

	return (
		<Field type="radio" required={ required } errors={ !!errors?.[name] }>
			<RadioButtons
				options={ options }
				id={ id || inputId }
				name={ inputName }
				value={ data[name] }
				onChange={ handleChange }
				{ ...props }
			/>
			<Feedback errors={ errors[name] } />
		</Field>
	)
}

export default FormRadioButtons
