import React from 'react'
import Field from '../Field'
import DateInput, { type DateInputProps } from '@/Components/Inputs/DateInput'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type InputConflicts, type BaseFormInputProps } from '.'
import { isUnset } from '@/lib'
import { type DateValue, type DatesRangeValue } from '@mantine/dates'

type DateInputValue = DatesRangeValue | Date[] | DateValue | undefined
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
}: FormDateInputProps<TForm>) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<DateInputValue|'', TForm>({ name, model })

	const handleChange = (date: DateInputValue|undefined) => {
		const dateWithValidEmptyType = (isUnset(date) ? '' : date)

		setValue(dateWithValidEmptyType)

		onChange?.(dateWithValidEmptyType, form)
	}

	const handleBlur = () => {
		if(onBlur) onBlur(value, form)
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
				value={ value }
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
