import React from 'react'
import Field from '../Field'
import RichTextInput, { type IRichTextProps } from '@/Components/Inputs/RichText'
import cx from 'clsx'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'

interface IRichTextFormProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<IRichTextProps, 'name'|'onBlur'|'onChange'|'value'>,
	IFormInputProps<string, TForm> {}

const RichText = <TForm extends NestedObject = NestedObject>({
	label,
	name,
	required = false,
	id,
	onChange,
	onBlur,
	model,
	field = true,
	...props
}: IRichTextFormProps<TForm>) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string, TForm>({ name, model })

	const handleChange = (v, delta, sources, editor) => {
		setValue(v)
		onChange?.(v, form)
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
					wrapper={ false }
					{ ...props }
				/>
			</>
		</ConditionalWrapper>
	)
}

export default RichText
