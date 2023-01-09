import React from 'react'
import Field from './Field'
import RichTextInput, { type IRichTextProps } from '../Inputs/RichText'
import cx from 'clsx'
import useInertiaInput from './useInertiaInput'

interface IRichTextFormProps extends IRichTextProps {
	model?: string
}

const RichText = ( { label, name, required = false, id, onChange, model, ...props }: IRichTextFormProps) => {
	const { inputName, inputId, value, setValue, error } = useInertiaInput(name, model)

	const handleChange: typeof onChange = (v, delta, sources, editor) => {
		setValue(v)
		if(onChange) onChange(v, delta, sources, editor)
	}

	return (
		<Field
			type="textarea"
			required={ required }
			errors={ !!error }
		>
			{ label && <label className={ cx({ required }) } htmlFor={ id || inputId }>
				{ label }
			</label> }
			<RichTextInput
				id={ id }
				name={ inputName }
				onChange={ handleChange }
				value={ value }
				{ ...props }
			/>
		</Field>
	)
}

export default RichText
