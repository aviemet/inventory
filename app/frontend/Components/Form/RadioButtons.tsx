import React, { useCallback } from 'react'
import RadioButtons, { type IRadioButtonsProps } from '../Inputs/RadioButtons'
import Field from './Field'
import Feedback from './Feedback'
import { useForm, useInputProps } from './Form'

interface IFormRadioButtonsProps extends Omit<IRadioButtonsProps, 'onChange'> {
	model?: string
	onChange?: (value: React.ChangeEvent<HTMLInputElement>, form: Inertia.FormProps) => void
}

const FormRadioButtons = ({ options, name, id, model, onChange, required, ...props }: IFormRadioButtonsProps) => {
	const form = useForm()
	const { inputId, inputName } = useInputProps(name, model)

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		form.setData(inputName, e.target.value)
		if(onChange) onChange(e, form)
	}, [onChange, inputName])

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
			<Feedback errors={ form.errors[name] } />
		</Field>
	)
}

export default FormRadioButtons
