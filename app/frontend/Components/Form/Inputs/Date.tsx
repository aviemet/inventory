import React from 'react'
import Field from '../Field'
import DateInput, { type IDateProps } from '@/Components/Inputs/DateInput'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'
import { coerceArray } from '../../../lib/collections'

interface IDateFormProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<IDateProps, 'name'|'onChange'|'onBlur'>,
	IFormInputProps<Date, TForm> {
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
}: IDateFormProps<TForm>) => {
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
