import React from 'react'
import { InputProps } from 'react-html-props'
import { useForm } from './Form'

interface IInputProps extends InputProps {
	label?: string
	name: string
}

const Checkbox = ({ label, name, onChange, type, ...props }: IInputProps) => {
	const { model, data, setData } = useForm()

	const id = `${model}[${name}]`

	return (
		<>
			<input
				id={ id }
				type="checkbox"
				value={ data[name] }
				onChange={ e => {
					if(onChange) onChange(e)
					setData(name, e.target.checked)
				} }
				{ ...props }
			/>
			{ label && <label htmlFor={ id }>{ label }</label> }
		</>
	)
}

export default Checkbox