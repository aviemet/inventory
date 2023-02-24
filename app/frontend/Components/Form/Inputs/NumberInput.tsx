import React, { forwardRef } from 'react'
import { NumberInput } from '@/Components/Inputs'
import Field from '../Field'
import cx from 'clsx'
import { useInertiaInput } from 'use-inertia-form'

const FormInput = forwardRef<HTMLInputElement, IInputProps<number>>((
	{ label, name, model, onChange, onBlur, id, required, compact = false, ...props },
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput({ name, model })

	const handleChange = (e: number) => {
		const v = e
		setValue(v)

		if(onChange) onChange(v, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		if(onBlur) onBlur(value as number, form)
	}

	return (
		<Field
			type="number"
			required={ required }
			className={ cx({ compact }) }
			errors={ !!error }
		>
			<NumberInput
				id={ id || inputId }
				className={ cx({ compact }) }
				name={ inputName }
				label={ label }
				value={ value as number }
				onChange={ handleChange }
				onBlur={ handleBlur }
				error={ error }
				ref={ ref }
				{ ...props }
			/>
		</Field>
	)
})

export default FormInput
