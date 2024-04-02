import React from 'react'
import Field from '../Field'
import TextareaInput, { type ITextareaProps } from '@/Components/Inputs/Textarea'
import cx from 'clsx'
import { useInertiaInput, type NestedObject } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'

interface IFormTextareaProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<ITextareaProps, 'onBlur'|'onChange'|'name'>,
	IFormInputProps<string, TForm> {}

const Textarea = <TForm extends NestedObject = NestedObject>(
	{
		label,
		name,
		required,
		onChange,
		onBlur,
		id,
		model,
		errorKey,
		field = true,
		...props
	}: IFormTextareaProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string, TForm>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value)
		onChange?.(e.target.value, form)
	}
	const handleBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if(onBlur) onBlur(e.target.value, form)
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
			condition={ props.hidden !== true && field }
		>
			<>
				{ label && <label className={ cx({ required }) } htmlFor={ id || inputId }>
					{ label }
				</label> }
				<TextareaInput
					id={ id || inputId }
					name={ inputName }
					onChange={ handleChange }
					onBlur={ handleBlur }
					value={ value }
					required={ required }
					error={ errorKey ? form.getError(errorKey) : error }
					wrapper={ false }
					{ ...props }
				>
				</TextareaInput>
			</>
		</ConditionalWrapper>
	)
}

export default Textarea
