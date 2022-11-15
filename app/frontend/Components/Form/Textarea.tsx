import React from 'react'
import { useForm, useInputProps } from './index'
import Field from './Field'
import TextareaInput, { type ITextareaProps } from '../Inputs/Textarea'
import cx from 'clsx'

interface IFormTextareaProps extends Omit<ITextareaProps, 'onChange'> {
	label?: string
	name: string
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>, form: Inertia.FormProps) => void
}

const Textarea = ({ label, name, required, onChange, id, ...props }: IFormTextareaProps) => {
	const form = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		form.setData(inputName, e.target.value)
		if(onChange) onChange(e, form)
	}

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
				error={ form.errors[name] }
				{ ...props }
			>
			</TextareaInput>
		</Field>
	)
}

export default Textarea
