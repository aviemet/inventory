import React from 'react'
import { TextAreaProps } from 'react-html-props'
import { useForm, useInputProps, setNestedValue } from './Form'
import Field from './Field'
import Feedback from './Feedback'
import TextareaInput from '../Inputs/Textarea'
import cx from 'classnames'

interface ITextareaProps extends TextAreaProps {
	label?: string
	name: string
}

const Textarea = ({ label, name, required, onChange, id, ...props }: ITextareaProps) => {
	const { getData, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange = e => {
		setData(data => setNestedValue(data, inputName, e.target.value))
		if(onChange) onChange(e)
	}

	return (
		<Field type="textarea" required={ required } errors={ !!errors?.[name] }>
			{ label && <label className={ cx({ required }) } htmlFor={ id || inputId }>
				{ label }
			</label> }
			<TextareaInput
				id={ id || inputId }
				name={ inputName }
				onChange={ handleChange }
				value={ getData(inputName) }
				required={ required }
				{ ...props }
			>
			</TextareaInput>
			<Feedback errors={ errors[name] } />
		</Field>
	)
}

export default Textarea
