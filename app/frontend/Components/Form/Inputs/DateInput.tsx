import React from 'react'
import Field from '../Components/Field'
import { DateInput, type DateInputValue } from '@/Components/Inputs'
import { type DateInputProps } from '@/Components/Inputs/DateInput'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type InputConflicts, type BaseFormInputProps } from '.'
import { isUnset } from '@/lib'

interface FormDateInputProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<DateInputProps, InputConflicts>,
	BaseFormInputProps<DateInputValue|'', TForm> {}

const FormDateInput = <TForm extends NestedObject = NestedObject>({
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
}: FormDateInputProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<
	Exclude<DateInputValue, undefined|null> | '', TForm>({ name, model })

	const handleChange = (date: DateInputValue) => {
		const dateWithValidEmptyType = (isUnset(date) ? '' : date)

		setValue(dateWithValidEmptyType)

		onChange?.(dateWithValidEmptyType, form)
	}

	const handleBlur = () => {
		onBlur?.(value, form)
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
			<DateInput
				id={ id || inputId }
				name={ inputName }
				// @ts-ignore - TS is treating value as Date
				// when it's clearly defined as a Union of many types
				value={ isUnset(value) ? undefined : value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				required={ required }
				error={ error }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}

export default FormDateInput
