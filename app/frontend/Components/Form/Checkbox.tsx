import React, { useCallback } from 'react'
import { useForm, useInputProps } from './Form'
import Field from './Field'
import Feedback from './Feedback'
import CheckboxInput, { type ICheckboxProps } from '@/Components/Inputs/Checkbox'
import cx from 'classnames'

interface IFormCheckboxProps extends Omit<ICheckboxProps, 'onChange'> {
	name: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>, form: Inertia.FormProps) => void
}

const Checkbox = ({ name, onChange, id, required, className, label, ...props }: IFormCheckboxProps) => {
	const form = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		form.setData(inputName, e.target.checked)
		if(onChange) onChange(e, form)
	}, [onChange, inputName])

	return (
		<Field
			className="pl-2"
			type="checkbox"
			required={ required }
			errors={ !!form.errors?.[name] }
		>
			<CheckboxInput
				id={ id || inputId }
				name={ inputName }
				type="checkbox"
				defaultChecked={ Boolean(form.getData(inputName)) }
				value={ form.getData(inputName) }
				onChange={ handleChange }
				className={ cx('mt-auto', 'mb-auto', className) }
				label={ label }
				{ ...props }
			/>
			<Feedback errors={ form.errors[name] } />
		</Field>
	)
}

export default Checkbox

