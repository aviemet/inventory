import React from 'react'
import Field from '../Field'
import DateTimeInput, { type IDateTimeProps } from '@/Components/Inputs/DateTimeInput'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'

interface IDateTimeFormProps extends Omit<IDateTimeProps, 'name'|'onChange'|'onBlur'>, IFormInputProps<Date> {
	field?: boolean
}

const DateTime = ({
	name,
	required,
	onChange,
	onBlur,
	id,
	model,
	field = true,
	...props
}: IDateTimeFormProps) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<Date>({ name, model })

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
