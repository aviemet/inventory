import React from 'react'
import { useForm, useInputProps } from './index'
import Field from './Field'
import RichTextInput, { type IRichTextProps } from '../Inputs/RichText'
import cx from 'clsx'

interface IRichTextFormProps extends IRichTextProps {}

const RichText = ( { label, name, required = false, id, onChange, ...props }: IRichTextFormProps) => {
	const form = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange: typeof onChange = (value, delta, sources, editor) => {
		form.setData(inputName, value)
		if(onChange) onChange(value, delta, sources, editor)
	}

	return (
		<Field type="textarea" required={ required } errors={ !!form.errors?.[name] }>
			{ label && <label className={ cx({ required }) } htmlFor={ id || inputId }>
				{ label }
			</label> }
			<RichTextInput
				id={ id }
				name={ inputName }
				onChange={ handleChange }
				value={ form.getData(inputName) }
				{ ...props }
			/>
		</Field>
	)
}

export default RichText
