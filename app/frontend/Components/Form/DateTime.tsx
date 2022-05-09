import React, { useCallback } from 'react'
import { useForm, useInputProps } from './Form'
import Field from './Field'
import Feedback from './Feedback'
import DateTimeInput, { type IDateTimeProps } from '../Inputs/DateTime'

interface IDateTimeFormProps extends Omit<IDateTimeProps, 'name'|'onChange'> {
	name: string
	onChange?: (dates: Flatpicker.ChangeProps, form: Inertia.FormProps) => void
}

const DateTime = ({ name, required, onChange, id, ...props }: IDateTimeFormProps) => {
	const form = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange = (dates: Flatpicker.ChangeProps) => {
		form.setData(inputName, dates.dates[0].toISOString())
		if(onChange) onChange(dates, form)
	}

	return (
		<Field type="date" required={ required } errors={ !!form.errors?.[name] }>
			<DateTimeInput
				id={ id || inputId }
				name={ inputName }
				value={ String(form.getData(inputName)) }
				onChange={ handleChange }
				required={ required }
				{ ...props }
			/>
			<Feedback errors={ form.errors[name] } />
		</Field>
	)
}

export default DateTime
