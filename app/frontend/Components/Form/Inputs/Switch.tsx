import React, { forwardRef, useCallback } from 'react'
import Field from '../Field'
import SwitchInput, { type ISwitchProps } from '@/Components/Inputs/Switch'
import cx from 'clsx'
import { useInertiaInput, type UseFormProps } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'

interface IFormSwitchProps extends Omit<ISwitchProps, 'onChange'> {
	name: string
	model?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>, form: UseFormProps) => void
	field?: boolean
}

const FormSwitchComponent = forwardRef<HTMLInputElement, IFormSwitchProps>((
	{ name, onChange, id, required, className, model, label, field = true, ...props },
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<boolean>({ name, model })

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.checked)
		if(onChange) onChange(e, form)
	}, [onChange, inputName])

	return (
		<ConditionalWrapper wrapper={ children => <Field
			type="checkbox"
			required={ required }
			errors={ !!error }
			grid={ false }
		>{ children }</Field> } condition={ field }>
			<SwitchInput
				id={ id || inputId }
				className={ className }
				name={ inputName }
				defaultChecked={ Boolean(value) }
				checked={ value }
				value={ name }
				onChange={ handleChange }
				error={ error }
				ref={ ref }
				label={ label }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
})

export default FormSwitchComponent
