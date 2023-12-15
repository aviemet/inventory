import React, { forwardRef } from 'react'
import TextInput, { type ITextInputProps } from '@/Components/Inputs/TextInput'
import Field from '../Field'
import { useInertiaInput, type NestedObject } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'

interface ITextFormInputProps<TForm extends NestedObject>
	extends
	Omit<ITextInputProps, 'onBlur'|'onChange'|'name'>,
	IFormInputProps<string, TForm> {}

// const TextFormInput = forwardRef<HTMLInputElement, ITextFormInputProps>((
const TextFormInput = <TForm extends NestedObject>(
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
	}: ITextFormInputProps<TForm>,
	// ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string>({ name, model })

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
			condition={ props.hidden !== true && field }
		>
			<TextInput
				// ref={ ref }
				id={ id || inputId }
				name={ inputName }
				value={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				error={ errorKey ? form.getError(errorKey) : error }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}
// )

export default TextFormInput
