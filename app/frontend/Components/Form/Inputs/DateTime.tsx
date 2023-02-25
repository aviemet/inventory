import React from 'react'
import Field from '../Field'
import DateTimeInput, { type IDateTimeProps } from '@/Components/Inputs/DateTime'
import { useInertiaInput, type UseFormProps } from 'use-inertia-form'
// import Flatpickr from 'react-flatpickr'

interface IDateTimeFormProps extends Omit<IDateTimeProps, 'name'|'onChange'> {
	name: string
	model?: string
	onChange?: (date: Date, form: UseFormProps) => void
}

const DateTime = ({ name, required, onChange, id, model, ...props }: IDateTimeFormProps) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<Date>({ name, model })

	const handleChange = (date: Date) => {
		setValue(date)

		if(onChange) onChange(date, form)
	}

	return (
		<Field
			type="date"
			required={ required }
			errors={ !!error }
		>
			<DateTimeInput
				id={ id || inputId }
				name={ inputName }
				value={ value }
				onChange={ handleChange }
				required={ required }
				error={ error }
				{ ...props }
			/>
		</Field>
	)
}

export default DateTime
