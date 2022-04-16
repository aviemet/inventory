import React from 'react'
import { useForm, useInputProps } from './Form'
import Field from './Field'
import CheckboxInput, { type ICheckboxProps } from '@/Components/Inputs/Checkbox'

interface IFormCheckboxProps extends ICheckboxProps {
	name: string
}

const Checkbox = ({ name, onChange, id, required, ...props }: IFormCheckboxProps) => {
	const { data, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	return (
		<Field type="checkbox" required={ required } errors={ !!errors?.[name] }>
			<CheckboxInput
				id={ id || inputId }
				name={ inputName }
				type="checkbox"
				value={ data[name] }
				onChange={ e => {
					if(onChange) onChange(e)
					setData(name, e.target.checked)
				} }
				{ ...props }
			/>
			{ errors && <div className="feedback"></div> }
		</Field>
	)
}

export default Checkbox
