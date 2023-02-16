import React from 'react'
import RadioButtons, { type IRadioButtonsProps } from '../Inputs/RadioButtons'
import Field from './Field'
import { useInertiaInput, type UseFormProps } from 'use-inertia-form'

interface IFormRadioButtonsProps extends Omit<IRadioButtonsProps, 'onChange'> {
	model?: string
	onChange?: (v: string, form: UseFormProps) => void
	required?: boolean
}

const FormRadioButtons = ({ options, name, id, model, onChange, required, ...props }: IFormRadioButtonsProps) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput({ name, model })

	const handleChange = (v: string) => {
		setValue(v)

		if(onChange) onChange(v, form)
	}

	return (
		<Field
			type="radio"
			required={ required }
			errors={ !!error }
		>
			<RadioButtons
				options={ options }
				id={ id || inputId }
				name={ inputName }
				value={ value }
				onChange={ handleChange }
				{ ...props }
			/>
		</Field>
	)
}

export default FormRadioButtons
