import React from 'react'
import RadioButtons, { type IRadioButtonsProps } from '@/Components/Inputs/RadioButtons'
import Field from '../Field'
import { useInertiaInput, type UseFormProps } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'

interface IFormRadioButtonsProps extends Omit<IRadioButtonsProps, 'onChange'> {
	model?: string
	onChange?: (v: string, form: UseFormProps) => void
	required?: boolean
	field?: boolean
}

const FormRadioButtons = ({
	options,
	name,
	id,
	model,
	onChange,
	required,
	field = true,
	...props
}: IFormRadioButtonsProps) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput({ name, model })

	const handleChange = (v: string) => {
		setValue(v)

		if(onChange) onChange(v, form)
		if(onChange) onChange(v, form)
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Field
					type="radio"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
			condition={ field }
		>
			<RadioButtons
				options={ options }
				id={ id || inputId }
				name={ inputName }
				value={ value }
				onChange={ handleChange }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default FormRadioButtons
