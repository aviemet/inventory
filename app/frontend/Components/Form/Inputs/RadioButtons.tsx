import React from 'react'
import RadioButtons, { type IRadioButtonsProps } from '@/Components/Inputs/RadioButtons'
import Field from '../Field'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'

interface IFormRadioButtonsProps extends Omit<IRadioButtonsProps, 'onBlur'|'onChange'|'name'>, IFormInputProps<string> {}

const FormRadioButtons = ({
	options,
	name,
	id,
	model,
	onChange,
	onBlur,
	required,
	field = true,
	span,
	...props
}: IFormRadioButtonsProps) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string>({ name, model })

	const handleChange = (v: string) => {
		setValue(v)

		if(onChange) onChange(v, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLDivElement, Element>) => {
		if(onBlur) onBlur(value, form)
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Field
					type="radio"
					required={ required }
					errors={ !!error }
					span={ span }
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
				onBlur={ handleBlur }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default FormRadioButtons
