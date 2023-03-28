import React, { forwardRef } from 'react'
import { CurrencyInput } from '@/Components/Inputs'
import Field from '../Field'
import cx from 'clsx'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'

interface INumberInputProps extends IInputProps<string> {
	field?: boolean
}

const FormInput = forwardRef<HTMLInputElement, INumberInputProps>((
	{
		label,
		name,
		model,
		onChange,
		onBlur,
		id,
		required,
		compact = false,
		field = true,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setValue(value)

		if(onChange) onChange(value, form)
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
					className={ cx({ compact }) }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
			condition={ field }
		>
			<CurrencyInput
				id={ id || inputId }
				className={ cx({ compact }) }
				name={ inputName }
				label={ label }
				value={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				error={ error }
				ref={ ref }
				{ ...props }
			/></ConditionalWrapper>
	)
})

export default FormInput
