import React from 'react'
import Field from '../Field'
import DateTimeInput, { type IDateTimeProps } from '@/Components/Inputs/DateTimeInput'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'

interface IDateTimeFormProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<IDateTimeProps, 'name'|'onChange'|'onBlur'>,
	IFormInputProps<Date, TForm> {
	field?: boolean
}

const DateTime = <TForm extends NestedObject = NestedObject>({
	name,
	required,
	onChange,
	onBlur,
	id,
	model,
	field = true,
	...props
}: IDateTimeFormProps<TForm>) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<Date, TForm>({ name, model })

	const handleChange = (date: Date) => {
		setValue(date)

		onChange?.(date, form)
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
			<DateTimeInput
				id={ id || inputId }
				name={ inputName }
				value={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				required={ required }
				error={ error }
				wrapper={ false }
				{ ...props }
			/></ConditionalWrapper>
	)
}

export default DateTime
