import React from 'react'
import { InputProps } from 'react-html-props'
import { useForm, useInputProps } from './Form'
import classnames from 'classnames'

interface IInputProps extends InputProps {
	label?: string
	name: string
}

const Input = ({ label, name, required, onChange, type = 'text', id, ...props }: IInputProps) => {
	const { data, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	return (
		<div className={ classnames('field', type, { required }) }>
			{ label && <label className={ classnames({ required }) } htmlFor={ id || inputId }>
				{ label }
			</label> }
			<input
				id={ id || inputId }
				name={ inputName }
				value={ data[name] }
				onChange={ e => {
					if(onChange) onChange(e)
					setData(name, e.target.value)
				} }
				type={ type }
				{ ...required }
				{ ...props }
			/>
			{ errors && <div className="feedback">

			</div> }
		</div>
	)
}

export default Input

