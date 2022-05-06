import React, { forwardRef } from 'react'
import { Input } from '../Inputs'
import { InputProps } from 'react-html-props'
import { useForm, useInputProps, setNestedValue } from './Form'
import Field from './Field'
import Feedback from './Feedback'
import cn from 'classnames'

interface IInputProps extends Omit<InputProps, 'onChange'|'ref'> {
	label?: string
	name: string
	model?: string
	onChange?: ({ value: unknown, setData: Function }) => void
}

const FormInput = forwardRef<HTMLInputElement, IInputProps>((
	{ label, name, model, onChange, type = 'text', id, required, ...props },
	ref,
) => {
	const { setData, errors, getData } = useForm()
	const { inputId, inputName } = useInputProps(name, model)

	const handleChange = e => {
		setData(data => setNestedValue(data, inputName, e.target.value))
		if(onChange) onChange(e.target.value)
	}

	return (
		<Field
			type={ type }
			required={ required }
			errors={ !!errors?.[name] }
		>
			<Input
				id={ id || inputId }
				name={ inputName }
				label={ label }
				value={ getData(inputName) }
				onChange={ handleChange }
				type={ type }
				ref={ ref }
				{ ...props }
			/>
			<Feedback errors={ errors[inputName] } />
		</Field>
	)
})

export default FormInput
