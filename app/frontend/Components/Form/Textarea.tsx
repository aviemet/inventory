import React from 'react'
import { TextAreaProps } from 'react-html-props'
import { useForm, useInputProps } from './Form'
import cx from 'classnames'

interface ITextareaProps extends TextAreaProps {
	label?: string
	name: string
}

const Textarea = ({ label, name, required, onChange, id, ...props }: ITextareaProps) => {
	const { data, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	return (
		<div className={ cx('field', 'textarea', { required }) }>
			{ label && <label className={ cx({ required }) } htmlFor={ id || inputId }>
				{ label }
			</label> }
			<textarea
				id={ id || inputId }
				name={ inputName }
				onChange={ e => {
					if(onChange) onChange(e)
					setData(name, e.target.value)
				} }
				value={ data[name] }
				{ ...required }
				{ ...props }
			>
			</textarea>
			{ errors && <div className="feedback">

			</div> }
		</div>
	)
}

export default Textarea
