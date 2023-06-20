import React from 'react'
import Field from '../Field'
import RichTextInput, { type IRichTextProps } from '@/Components/Inputs/RichText'
import cx from 'clsx'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'

interface IRichTextFormProps extends Omit<IRichTextProps, 'name'|'onBlur'|'onChange'|'value'>, IFormInputProps<string> {}

const RichText = ({
	label,
	name,
	required = false,
	id,
	onChange,
	onBlur,
	model,
	field = true,
	span,
	...props
}: IRichTextFormProps) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string>({ name, model })

	const handleChange = (v, delta, sources, editor) => {
		setValue(v)
		if(onChange) onChange(v, form)
	}
	const handleBlur = () => {
		if(onBlur) onBlur(value, form )
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Field
					type="textarea"
					required={ required }
					errors={ !!error }
					span={ span }
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
					onBlur={ handleBlur }
					value={ value }
					{ ...props }
				/>
			</>
		</ConditionalWrapper>
	)
}

export default RichText
