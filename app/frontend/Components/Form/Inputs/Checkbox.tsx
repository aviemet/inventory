import React, { forwardRef, useCallback } from 'react'
import Field from '../Field'
import CheckboxInput, { type ICheckboxProps } from '@/Components/Inputs/Checkbox'
import { useInertiaInput, type UseFormProps } from 'use-inertia-form'

interface IFormCheckboxProps extends Omit<ICheckboxProps, 'onChange'> {
	name: string
	model?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>, form: UseFormProps) => void
}

const FormCheckboxComponent = forwardRef<HTMLInputElement, IFormCheckboxProps>((
	{ name, onChange, id, required, className, model, ...props },
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<boolean>({ name, model })

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.checked)
		if(onChange) onChange(e, form)
	}, [onChange, inputName])

	return (
		<Field
			type="checkbox"
			required={ required }
			errors={ !!error }
		>
			<CheckboxInput
				id={ id || inputId }
				className={ className }
				name={ inputName }
				defaultChecked={ Boolean(value) }
				value={ value }
				onChange={ handleChange }
				error={ error }
				ref={ ref }
				{ ...props }
			/>
		</Field>
	)
})

export default FormCheckboxComponent
