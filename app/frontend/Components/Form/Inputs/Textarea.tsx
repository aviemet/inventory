import React from 'react'
import Field from '../Field'
import TextareaInput, { type ITextareaProps } from '../../Inputs/Textarea'
import cx from 'clsx'
import { useInertiaInput, type UseFormProps } from 'use-inertia-form'

interface IFormTextareaProps extends Omit<ITextareaProps, 'onChange'> {
	label?: string
	name: string
	model?: string
	errorKey?: string
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>, form: UseFormProps) => void
}

const Textarea = ({ label, name, required, onChange, id, model, errorKey, ...props }: IFormTextareaProps) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value)
		if(onChange) onChange(e, form)
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
			<TextareaInput
				id={ id || inputId }
				name={ inputName }
				onChange={ handleChange }
				value={ value }
				required={ required }
				error={ errorKey ? form.getError(errorKey) : error }
				{ ...props }
			>
			</TextareaInput>
		</Field>
	)
}

export default Textarea
