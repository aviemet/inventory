import React from 'react'
import { useForm, useInputProps, setNestedValue } from './Form'
import Field from './Field'
import Feedback from './Feedback'
import CheckboxInput, { type ICheckboxProps } from '@/Components/Inputs/Checkbox'
import cx from 'classnames'

interface IFormCheckboxProps extends ICheckboxProps {
	name: string
}

const Checkbox = ({ name, onChange, id, required, className, label, ...props }: IFormCheckboxProps) => {
	const { getData, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange = e => {
		setData(data => setNestedValue(data, inputName, e.target.checked))
		if(onChange) onChange(e)
	}

	return (
		<Field
			className="pl-2"
			type="checkbox"
			required={ required }
			errors={ !!errors?.[name] }
		>
			<CheckboxInput
				id={ id || inputId }
				name={ inputName }
				type="checkbox"
				value={ getData(inputName) }
				onChange={ handleChange }
				className={ cx('mt-auto', 'mb-auto', className) }
				label={ label }
				{ ...props }
			/>
			<Feedback errors={ errors[name] } />
		</Field>
	)
}

export default Checkbox

