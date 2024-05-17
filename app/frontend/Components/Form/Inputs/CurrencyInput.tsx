import React from 'react'
import CurrencyInput, { type CurrencyInputProps } from '@/Components/Inputs/CurrencyInput'
import Field from '../Field'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { InputConflicts, type BaseFormInputProps } from '.'

interface INumberInputProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<CurrencyInputProps, InputConflicts>,
	BaseFormInputProps<number, TForm> {}

const FormInput = <TForm extends NestedObject = NestedObject>(
	{
		name,
		model,
		onChange,
		onBlur,
		onFocus,
		id,
		required,
		field = true,
		...props
	} : INumberInputProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<number, TForm>({ name, model })

	const handleChange = (value: string|number) => {
		const numberValue = Number(value)
		setValue(numberValue)

		onChange?.(numberValue, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		const value = Number(e.target.value)
		setValue(value)

		onBlur?.(value, form)
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
			<CurrencyInput
				id={ id || inputId }
				name={ inputName }
				value={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ e => onFocus?.(Number(e.target.value), form) }
				error={ error }
				wrapper={ false }
				{ ...props }
			/></ConditionalWrapper>
	)
}

export default FormInput
