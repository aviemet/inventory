import React, { forwardRef } from 'react'
import NumberInput, { type INumberInputProps } from '@/Components/Inputs/NumberInput'
import Field from '../Field'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'

interface INumberFormInputProps extends Omit<INumberInputProps, 'onBlur'|'onChange'|'name'>, IFormInputProps<number> {}

const FormInput = forwardRef<HTMLInputElement, INumberFormInputProps>((
	{
		name,
		model,
		onChange,
		onBlur,
		id,
		required,
		field = true,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<number>({ name, model })

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
				ref={ ref }
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
})

export default FormInput
