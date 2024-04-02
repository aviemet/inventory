import React from 'react'
import NumberInput, { type INumberInputProps } from '@/Components/Inputs/NumberInput'
import Field from '../Field'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'

interface INumberFormInputProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<INumberInputProps, 'onBlur'|'onChange'|'name'>,
	IFormInputProps<number, TForm> {}

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
	}: INumberFormInputProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<number, TForm>({ name, model })

	const handleChange = (e: number) => {
		const v = e
		setValue(v)

		onChange?.(v, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		if(onBlur) onBlur(value as number, form)
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Field
					type="number"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
			condition={ field }
		>
			<NumberInput
				id={ id || inputId }
				name={ inputName }
				value={ value as number }
				onChange={ handleChange }
				onBlur={ handleBlur }
				error={ error }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default FormInput
