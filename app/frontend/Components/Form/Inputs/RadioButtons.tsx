import React from 'react'
import RadioButtons, { type IRadioButtonsProps } from '@/Components/Inputs/RadioButtons'
import Field from '../Field'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'

interface IFormRadioButtonsProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<IRadioButtonsProps, 'onBlur'|'onChange'|'name'>,
	IFormInputProps<string, TForm> {}

const FormRadioButtons = <TForm extends NestedObject = NestedObject>({
	options,
	name,
	id,
	model,
	onChange,
	onBlur,
	required,
	field = true,
	...props
}: IFormRadioButtonsProps<TForm>) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string, TForm>({ name, model })

	const handleChange = (v: string) => {
		setValue(v)

		onChange?.(v, form)
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
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default FormRadioButtons
