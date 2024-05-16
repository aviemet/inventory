import React from 'react'
import Field from '../Field'
import DateTimeInput, { type DateTimeProps } from '@/Components/Inputs/DateTimeInput'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type InputConflicts, type BaseFormInputProps } from '.'
import { isUnset } from '@/lib'

interface DateTimeFormProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<DateTimeProps, InputConflicts>,
	BaseFormInputProps<Date, TForm> {
	field?: boolean
}

const DateTime = <TForm extends NestedObject = NestedObject>({
	name,
	required,
	onChange,
	onBlur,
	onFocus,
	id,
	model,
	field = true,
	wrapperProps,
	...props
}: DateTimeFormProps<TForm>) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<Date|null, TForm>({ name, model })

	// TODO: Handle unsetting values in useInertiaForm
	const handleChange = (date: Date|null) => {
		// @ts-ignore
		setValue(isUnset(date) ? '' : date!)

		onChange?.(date, form)
	}

	const handleBlur = () => {
		onBlur?.(value, form)
	}

	const handleFocus = () => {
		onFocus?.(value, form)
	}

	return (
		<ConditionalWrapper
			condition={ field }
			wrapper={ children => (
				<Field
					type="date"
					required={ required }
					errors={ !!error }
					{ ...wrapperProps }
				>
					{ children }
				</Field>
			) }
		>
			<DateTimeInput
				id={ id || inputId }
				name={ inputName }
				value={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ handleFocus }
				required={ required }
				error={ error }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default DateTime
