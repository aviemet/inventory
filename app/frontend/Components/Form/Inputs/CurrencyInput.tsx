import React from 'react'
import CurrencyInput, { type ICurrencyInputProps } from '@/Components/Inputs/CurrencyInput'
import Field from '../Field'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'

interface INumberInputProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<ICurrencyInputProps, 'name'|'onChange'|'onBlur'>,
	IFormInputProps<string|number, TForm> {}

const FormInput = <TForm extends NestedObject = NestedObject>(
	{
		name,
		model,
		onChange,
		onBlur,
		id,
		required,
		field = true,
		...props
	} : INumberInputProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string|number, TForm>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setValue(value)

		onChange?.(value, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		const value = e.target.value
		setValue(value)

		if(onBlur) onBlur(value, form)
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
				error={ error }
				wrapper={ false }
				{ ...props }
			/></ConditionalWrapper>
	)
}

export default FormInput
