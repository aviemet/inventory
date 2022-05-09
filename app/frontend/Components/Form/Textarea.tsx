import React, { useCallback } from 'react'
import { TextAreaProps } from 'react-html-props'
import { useForm, useInputProps } from './Form'
import Field from './Field'
import Feedback from './Feedback'
import TextareaInput from '../Inputs/Textarea'
import cx from 'classnames'

interface ITextareaProps extends Omit<TextAreaProps, 'onChange'> {
	label?: string
	name: string
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>, form: Inertia.FormProps) => void
}

const Textarea = ({ label, name, required, onChange, id, ...props }: ITextareaProps) => {
	const form = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		form.setData(inputName, e.target.value)
		if(onChange) onChange(e, form)
	}, [onChange, inputName])

	return (
		<Field type="textarea" required={ required } errors={ !!form.errors?.[name] }>
			{ label && <label className={ cx({ required }) } htmlFor={ id || inputId }>
				{ label }
			</label> }
			<TextareaInput
				id={ id || inputId }
				name={ inputName }
				onChange={ handleChange }
				value={ form.getData(inputName) }
				required={ required }
				{ ...props }
			>
			</TextareaInput>
			<Feedback errors={ form.errors[name] } />
		</Field>
	)
}

export default Textarea
