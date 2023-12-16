import React from 'react'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import SwatchInput, { type ISwatchInputProps } from '@/Components/Inputs/SwatchInput'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import Field from '../Field'
import { type IFormInputProps } from '.'

interface ISwatchFormInputProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<ISwatchInputProps, 'onBlur'|'onChange'|'name'|'ref'>,
	IFormInputProps<string, TForm> {}

const SwatchFormInput = <TForm extends NestedObject = NestedObject>(
	{
		name,
		model,
		onChange,
		onBlur,
		id,
		required,
		errorKey,
		field = true,
		...props
	}: ISwatchFormInputProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string, TForm>({ name, model })

	const handleChange = (color: string) => {
		setValue(color)

		onChange?.(color, form)
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Field
					type="text"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
			condition={ field }
		>
			<SwatchInput
				initialValue={ value }
				value={ value }
				onChange={ handleChange }
				name={ inputName }
				id={ inputId }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default SwatchFormInput
