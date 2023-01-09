import React, { useCallback } from 'react'
import Field from './Field'
import CheckboxInput, { type ICheckboxProps } from '@/Components/Inputs/Checkbox'
import useInertiaInput from './useInertiaInput'

interface IFormCheckboxProps extends Omit<ICheckboxProps, 'onChange'> {
	name: string
	model?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>, form: Inertia.FormProps) => void
}

const FormCheckboxComponent = ({ name, onChange, id, required, className, model, ...props }: IFormCheckboxProps) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput(name, model)

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
				name={ inputName }
				defaultChecked={ Boolean(value) }
				value={ value }
				onChange={ handleChange }
				className={ className }
				error={ error }
				{ ...props }
			/>
		</Field>
	)
}

export default FormCheckboxComponent

