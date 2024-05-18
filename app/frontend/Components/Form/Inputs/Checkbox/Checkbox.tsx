import React, { forwardRef } from 'react'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { Field } from '@/Components/Form'
import CheckboxInput, { type CheckboxProps } from '@/Components/Inputs/Checkbox'
import FormCheckboxGroup from './Group'
import { type InputConflicts, type BaseFormInputProps } from '..'

export interface FormCheckboxProps extends Omit<CheckboxProps, InputConflicts>, BaseFormInputProps<boolean> {}

type FormCheckboxComponentType = React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<HTMLInputElement>
> & {
	Group: typeof FormCheckboxGroup
};

const FormCheckboxComponent: FormCheckboxComponentType = forwardRef<HTMLInputElement, FormCheckboxProps>((
	{
		name,
		onChange,
		onBlur,
		onFocus,
		id,
		required,
		className,
		model,
		field = true,
		style,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<boolean>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.checked)
		onChange?.(e.target.checked, form)
	}

	const handleBlur = () => {
		onBlur?.(value, form)
	}

	return (
		<ConditionalWrapper
			condition={ field }
			wrapper={ children => (
				<Field
					type="checkbox"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
		>
			<CheckboxInput
				ref={ ref }
				id={ id || inputId }
				className={ className }
				name={ inputName }
				value={ name }
				checked={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ e => onFocus?.(e.target.checked, form) }
				error={ error }
				style={ [{ padding: '14px 10px' }, style] }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}) as FormCheckboxComponentType

FormCheckboxComponent.Group = FormCheckboxGroup

export default FormCheckboxComponent
