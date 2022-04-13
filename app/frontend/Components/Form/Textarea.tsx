import React from 'react'
import { TextAreaProps } from 'react-html-props'
import { useForm, useInputProps } from './Form'
import classnames from 'classnames'

interface ITextareaProps extends TextAreaProps {
	label?: string
	name: string
}

const Textarea = ({ label, name, required, onChange, id, ...props }: ITextareaProps) => {
	const { data, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	return (
		<div className={ classnames('field', 'textarea', { required }) }>
			{ label && <label className={ classnames({ required }) } htmlFor={ id || inputId }>
				{ label }
			</label> }
			<textarea
				id={ id || inputId }
				name={ inputName }
				onChange={ e => {
					if(onChange) onChange(e)
					setData(name, e.target.value)
				} }
				{ ...required }
				{ ...props }
			>
				{ data[name] }
			</textarea>
			{ errors && <div className="feedback">

			</div> }
		</div>
	)
}

export default Textarea
