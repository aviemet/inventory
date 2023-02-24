import React, { forwardRef } from 'react'
import Field from '../Field'
import DateTimeInput, { type IDateTimeProps } from '../../Inputs/DateTime'
import { useInertiaInput, type UseFormProps } from 'use-inertia-form'
import Flatpickr from 'react-flatpickr'

interface IDateTimeFormProps extends Omit<IDateTimeProps, 'name'|'onChange'> {
	name: string
	model?: string
	onChange?: (dates: Flatpicker.ChangeProps, form: UseFormProps) => void
}

const DateTime = forwardRef<Flatpickr, IDateTimeFormProps>((
	{ name, required, onChange, id, model, ...props },
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput({ name, model })

	const handleChange = (dates: Flatpicker.ChangeProps) => {
		setValue(dates.dates[0].toISOString())

		if(onChange) onChange(dates, form)
		if(onChange) onChange(dates, form)
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
				value={ String(value) }
				onChange={ handleChange }
				required={ required }
				error={ error }
				ref={ ref }
				{ ...props }
			/>
		</Field>
	)
})

export default DateTime
