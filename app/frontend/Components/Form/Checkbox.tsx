import React, { useCallback } from 'react'
import { useForm, useInputProps } from './index'
import Field from './Field'
import CheckboxInput, { type ICheckboxProps } from '@/Components/Inputs/Checkbox'

interface IFormCheckboxProps extends Omit<ICheckboxProps, 'onChange'> {
	name: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>, form: Inertia.FormProps) => void
}

const FormCheckboxComponent = ({ name, onChange, id, required, className, ...props }: IFormCheckboxProps) => {
	const form = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		form.setData(inputName, e.target.checked)
		if(onChange) onChange(e, form)
	}, [onChange, inputName])

	return (
		<Field
			type="checkbox"
			required={ required }
			errors={ !!form.errors?.[name] }
		>
			<CheckboxInput
				id={ id || inputId }
				name={ inputName }
				defaultChecked={ Boolean(form.getData(inputName)) }
				value={ form.getData(inputName) }
				onChange={ handleChange }
				className={ className }
				{ ...props }
			/>
		</Field>
	)
}

export default FormCheckboxComponent

