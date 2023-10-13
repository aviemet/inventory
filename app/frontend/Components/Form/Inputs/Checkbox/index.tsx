import React, { forwardRef } from 'react'
import { ForwardRefWithStaticComponents } from '@mantine/utils'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { Field } from '@/Components/Form'
import CheckboxInput, { type ICheckboxProps } from '@/Components/Inputs/Checkbox'
import FormCheckboxGroup from './Group'
import { type IFormInputProps } from '..'

interface IFormCheckboxProps extends Omit<ICheckboxProps, 'name'|'onBlur'|'onChange'|'defaultChecked'>, IFormInputProps<boolean> {}

export type TFormCheckboxComponent = ForwardRefWithStaticComponents<
IFormCheckboxProps,
{ Group: typeof FormCheckboxGroup }
>

const FormCheckboxComponent: TFormCheckboxComponent = forwardRef<HTMLInputElement, IFormCheckboxProps>((
	{
		name,
		onChange,
		onBlur,
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
		if(onBlur) onBlur(value, form)
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
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
			<CheckboxInput
				ref={ ref }
				id={ id || inputId }
				className={ className }
				name={ inputName }
				value={ name }
				checked={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				error={ error }
				style={ [{ padding: '14px 10px' }, style] }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}) as any

FormCheckboxComponent.Group = FormCheckboxGroup

export default FormCheckboxComponent
