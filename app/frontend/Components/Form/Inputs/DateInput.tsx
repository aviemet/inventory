import React from 'react'
import Field from '../Field'
import DateInput, { type DateInputProps } from '@/Components/Inputs/DateInput'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type InputConflicts, type BaseFormInputProps } from '.'
import { coerceArray } from '../../../lib/collections'

interface FormDateInputProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<DateInputProps, InputConflicts>,
	BaseFormInputProps<Date, TForm> {
	field?: boolean
}

const Date = <TForm extends NestedObject = NestedObject>({
	name,
	required,
	onChange,
	onBlur,
	id,
	model,
	field = true,
	...props
}: FormDateInputProps<TForm>) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<Date, TForm>({ name, model })

	const handleChange = (date: Date|Date[]) => {
		const dateValue = Array.isArray(date) ? date[0] : date

		setValue(dateValue)

		onChange?.(dateValue, form)
	}

	const handleBlur = () => {
		if(onBlur) onBlur(value, form)
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Field
					type="date"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
			condition={ field }
		>
			<DateInput
				id={ id || inputId }
				name={ inputName }
				value={ coerceArray(value) }
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

export default Date
