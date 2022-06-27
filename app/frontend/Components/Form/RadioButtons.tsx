import React from 'react'
import RadioButtons, { type IRadioButtonsProps } from '../Inputs/RadioButtons'
import Field from './Field'
import { useForm, useInputProps } from './index'

interface IFormRadioButtonsProps extends Omit<IRadioButtonsProps, 'onChange'> {
	model?: string
	onChange?: (v: string, form: Inertia.FormProps) => void
	required?: boolean
}

const FormRadioButtons = ({ options, name, id, model, onChange, required, ...props }: IFormRadioButtonsProps) => {
	const form = useForm()
	const { inputId, inputName } = useInputProps(name, model)

	const handleChange = (v: string) => {
		form.setData(inputName, v)
		if(onChange) onChange(v, form)
	}

	return (
		<Field type="radio" required={ required } errors={ !!form.errors?.[name] }>
			<RadioButtons
				options={ options }
				id={ id || inputId }
				name={ inputName }
				value={ form.getData(inputName) }
				onChange={ handleChange }
				{ ...props }
			/>
		</Field>
	)
}

export default FormRadioButtons
