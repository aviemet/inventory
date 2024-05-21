import React, { forwardRef, type ForwardedRef } from 'react'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import SwatchInput, { type SwatchInputProps } from '@/Components/Inputs/SwatchInput'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import Field from '../Components/Field'
import { type InputConflicts, type BaseFormInputProps } from '.'

interface FormSwatchInputProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<SwatchInputProps, InputConflicts>,
	BaseFormInputProps<string, TForm> {
}

const SwatchFormInput = forwardRef(<TForm extends NestedObject = NestedObject>(
	{
		name,
		model,
		onChange,
		onBlur,
		onFocus,
		id,
		required,
		errorKey,
		field = true,
		wrapperProps,
		...props
	}: FormSwatchInputProps<TForm>,
	ref: ForwardedRef<HTMLInputElement>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string, TForm>({ name, model })

	const handleChange = (color: string) => {
		setValue(color)

		onChange?.(color, form)
	}

	return (
		<ConditionalWrapper
			condition={ field }
			wrapper={ children => (
				<Field
					type="text"
					required={ required }
					errors={ !!error }
					{ ...wrapperProps }
				>
					{ children }
				</Field>
			) }
		>
			<SwatchInput
				initialValue={ value }
				value={ value }
				onChange={ handleChange }
				onFocus={ e => onFocus?.(e.target.value, form) }
				name={ inputName }
				id={ inputId }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
})

export default SwatchFormInput
