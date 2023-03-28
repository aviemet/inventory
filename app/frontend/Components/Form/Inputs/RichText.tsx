import React from 'react'
import Field from '../Field'
import RichTextInput, { type IRichTextProps } from '@/Components/Inputs/RichText'
import cx from 'clsx'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'

interface IRichTextFormProps extends IRichTextProps {
	name: string
	model?: string
	field?: boolean
}

const RichText = ({
	label,
	name,
	required = false,
	id,
	onChange,
	model,
	field = true,
	...props
}: IRichTextFormProps) => {
	const { inputName, inputId, value, setValue, error } = useInertiaInput<string>({ name, model })

	const handleChange: typeof onChange = (v, delta, sources, editor) => {
		setValue(v)
		if(onChange) onChange(v, delta, sources, editor)
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Field
					type="textarea"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
			condition={ field }
		>
			<>
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
			</>
		</ConditionalWrapper>
	)
}

export default RichText
