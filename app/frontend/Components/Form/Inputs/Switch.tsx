import React from 'react'
import Field from '../Field'
import SwitchInput, { type ISwitchProps } from '@/Components/Inputs/Switch'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'

interface IFormSwitchProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<ISwitchProps, 'onBlur'|'onChange'|'name'>,
	IFormInputProps<boolean, TForm> {}

const FormSwitchComponent = <TForm extends NestedObject = NestedObject>(
	{ name, onChange, onBlur, id, required, model, field = true, ...props }: IFormSwitchProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<boolean, TForm>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.checked)
		onChange?.(e.target.checked, form)
	}

	const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.checked)
		if(onBlur) onBlur(e.target.checked, form)
	}

	return (
		<ConditionalWrapper wrapper={ children => (
			<Field
				type="checkbox"
				required={ required }
				errors={ !!error }
			>
				{ children }
			</Field>
		) }
		condition={ field }
		>
			<SwitchInput
				id={ id || inputId }
				name={ inputName }
				defaultChecked={ Boolean(value) }
				checked={ value }
				value={ name }
				onChange={ handleChange }
				onBlur={ handleBlur }
				error={ error }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default FormSwitchComponent
