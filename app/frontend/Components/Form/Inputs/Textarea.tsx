import React, { forwardRef } from 'react'
import Field from '../Field'
import TextareaInput, { type ITextareaProps } from '@/Components/Inputs/Textarea'
import cx from 'clsx'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'

interface IFormTextareaProps extends Omit<ITextareaProps, 'onBlur'|'onChange'|'name'>, IFormInputProps<string> {}

const Textarea = forwardRef<HTMLTextAreaElement, IFormTextareaProps>((
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
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string>({ name, model })

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
					ref={ ref }
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
})

export default Textarea
